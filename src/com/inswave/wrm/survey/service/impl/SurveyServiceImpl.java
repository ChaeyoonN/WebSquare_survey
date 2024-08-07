package com.inswave.wrm.survey.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.sql.Date;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.inswave.wrm.survey.dao.SurveyDao;
import com.inswave.wrm.survey.service.SurveyService;
import com.inswave.wrm.util.UserInfo;

@Service
public class SurveyServiceImpl implements SurveyService {
	@Resource(name = "SurveyDao")
    private SurveyDao surveyDao;
	
	@Autowired
	private UserInfo user;
	
	/**
	 * 설문목록을 조회한다.
	 * 
	 * @param param
	 * @return
	 */
	@Override
	public List<Map> getList(Map param) {
		return surveyDao.getList(param);
	}
	
	@Override
	public List<Map> getParticipatedSurveys(Map param) {
		return surveyDao.getParticipatedSurveys(param);
	}

	@Override
	public Map saveSurvey(Map param) {
	    int iCnt = 0;
	    int uCnt = 0;
	    Long surveyId = 0L;
	    Map result = new HashMap();
	    Map q_result = new HashMap();
	    List<Map<String, Object>> surInfo = (List<Map<String, Object>>) param.get("surInfo");
	    List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("surQInfo");
	    List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("surOpInfo");
	    // 설문 정보 저장
        // surInfo : [{title=제목1, start_date=20240620, end_date=20240620, rowStatus=C}]
    	// 현재 로그인한 자의 아이디를 작성자로 설정
	    System.out.println("survey param!! : " + surInfo);
	    for(Map<String, Object> sur: surInfo) {
	    	String rowStatus = (String) sur.get("rowStatus");
	    	if(rowStatus.equals("C")) {
	    		sur.put("creator", user.getUserId());
		    	// 설문 정보 저장
		    	iCnt += surveyDao.createSurvey(sur);
		    	surveyId = ((Number) sur.get("surveyId")).longValue();
		    	q_result = saveQuestion(param, surveyId);
	    	} else if(rowStatus.equals("U")) {// 완료 상태인 경우(survey_result테이블 데이터 존재) 설문 수정 못하게 해야
	    		surveyDao.deleteSurveyResultBySurveyId(sur);
	    		surveyDao.deleteSurveyOptionsBySurveyId(sur);
	    		surveyDao.deleteSurveyQuestionsBySurveyId(sur);
	    		// uCnt += surveyDao.updateSurvey(sur);
	    		surveyId = ((Number) updatedSurvey(sur)).longValue();
	    		q_result = saveQuestionBySaveAll(param, surveyId);
	    	}
	    	
	    }
	    result.put("ICNT", String.valueOf(iCnt));
	    result.put("UCNT", String.valueOf(uCnt));
	    result.put("surveyId", String.valueOf(surveyId));
	    result.put("QCNT", q_result.get("QCNT"));
	    result.put("OCNT", q_result.get("OCNT"));
	    
	    return result;
	}

	@Override
	public Map saveQuestion(Map param, Long surveyId) {
		int qCnt = 0;
		Long questionId = 0L;
		List<Long> questionIds = new ArrayList<>();
	    Map result = new HashMap();
	    Map o_result = new HashMap();
	    List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("surQInfo");
	    System.out.println("question param!! : " + surQInfo);
	    for(Map<String, Object> q: surQInfo) {
	    	// 설문 정보 저장
	    	q.put("surveyId", surveyId);
	    	qCnt += surveyDao.createQuestion(q);
	    	questionId = ((Number) q.get("questionId")).longValue();
	    	questionIds.add(questionId);
	    }
	    System.out.println("questionIds!!!===: "+questionIds);
	    o_result = saveOption(param, surveyId, questionIds);
	    result.put("QCNT", String.valueOf(qCnt));
	    result.put("OCNT", o_result.get("OCNT"));
		return result;
	}

	@Override
	public Map saveOption(Map param, Long surveyId, List<Long> questionIds) {
	    int oCnt = 0;
	    Map result = new HashMap();
	    List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("surOpInfo");
	    System.out.println("option param!! : " + surOpInfo);
	    // surOpInfo 형태 : [
	    //{"q_num":1,"option_num":"1","option_text":"11","rowStatus":"C"},
	    //{"q_num":1,"option_num":"2","option_text":"12","rowStatus":"C"},
	    //{"q_num":"2","option_num":"1","option_text":"21","rowStatus":"C"},
	    //{"q_num":"2","option_num":"2","option_text":"22","rowStatus":"C"}
	    // ]

	    // q_num이 같은 것끼리 questionId를 같게 설정하기 위해 Set 생성
	    Set<Integer> qNumSet = new HashSet<>();
	    for (Map<String, Object> o : surOpInfo) {
	        int q_num = Integer.parseInt(String.valueOf(o.get("q_num")));
	        qNumSet.add(q_num);
	    }
	    System.out.println("qNumSet.size() 길이와 questionIds.size()는 같야야");
	    System.out.println(qNumSet.size());
	    System.out.println(questionIds.size());
	    // Set에 있는 q_num들에 대해 questionId 매핑
	    Map<Integer, Long> qNumToQuestionId = new HashMap<>();
	    int i = 0;
	    for (Integer q_num : qNumSet) { // qNumSet.size() 길이와 questionIds.size()는 같음.
	        qNumToQuestionId.put(q_num, questionIds.get(i++));
	    }

	    for (Map<String, Object> o : surOpInfo) {
	        // 선택지 정보 저장
	        o.put("surveyId", surveyId);

	        // q_num에 해당하는 questionId 설정!!
	        int q_num = Integer.parseInt(String.valueOf(o.get("q_num")));
	        o.put("questionId", qNumToQuestionId.get(q_num)); // qNumToQuestionId 맵에서 해당 questionId를 찾아 선택지 옵션 정보에 설정

	        oCnt += surveyDao.createOption(o);
	        Long optionId = ((Number) o.get("optionId")).longValue();
	    }
	    result.put("OCNT", String.valueOf(oCnt));
	    return result;
	}
	
	// 
	@Override
	public Map saveQuestionBySaveAll(Map param, Long surveyId) {
		int qCnt = 0;
		Long questionId = 0L;
		List<Long> questionIds = new ArrayList<>();
	    Map result = new HashMap();
	    Map o_result = new HashMap();
	    List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("dlt_surQInfo_modify_request");
	    System.out.println("question param!! : " + surQInfo);
	    for(Map<String, Object> q: surQInfo) {
	    	// 설문 정보 저장
	    	q.put("surveyId", surveyId);
	    	qCnt += surveyDao.createQuestion(q);
	    	questionId = ((Number) q.get("questionId")).longValue();
	    	questionIds.add(questionId);
	    }
	    System.out.println("questionIds!!!===: "+questionIds);
	    o_result = saveOptionBySaveAll(param, surveyId, questionIds);
	    result.put("QCNT", String.valueOf(qCnt));
	    result.put("OCNT", o_result.get("OCNT"));
		return result;
	}

	@Override
	public Map saveOptionBySaveAll(Map param, Long surveyId, List<Long> questionIds) {
	    int oCnt = 0;
	    Map result = new HashMap();
	    List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("dlt_surOpInfo_modify_request");
	    System.out.println("option param!! : " + surOpInfo);
	    // surOpInfo 형태 : [
	    //{"q_num":1,"option_num":"1","option_text":"11","rowStatus":"C"},
	    //{"q_num":1,"option_num":"2","option_text":"12","rowStatus":"C"},
	    //{"q_num":"2","option_num":"1","option_text":"21","rowStatus":"C"},
	    //{"q_num":"2","option_num":"2","option_text":"22","rowStatus":"C"}
	    // ]

	    // q_num이 같은 것끼리 questionId를 같게 설정하기 위해 Set 생성
	    Set<Integer> qNumSet = new HashSet<>();
	    for (Map<String, Object> o : surOpInfo) {
	        int q_num = Integer.parseInt(String.valueOf(o.get("q_num")));
	        qNumSet.add(q_num);
	    }
	    System.out.println("qNumSet.size() 길이와 questionIds.size()는 같야야");
	    System.out.println(qNumSet.size());
	    System.out.println(questionIds.size());
	    // Set에 있는 q_num들에 대해 questionId 매핑
	    Map<Integer, Long> qNumToQuestionId = new HashMap<>();
	    int i = 0;
	    for (Integer q_num : qNumSet) { // qNumSet.size() 길이와 questionIds.size()는 같음.
	        qNumToQuestionId.put(q_num, questionIds.get(i++));
	    }

	    for (Map<String, Object> o : surOpInfo) {
	        // 선택지 정보 저장
	        o.put("surveyId", surveyId);

	        // q_num에 해당하는 questionId 설정!!
	        int q_num = Integer.parseInt(String.valueOf(o.get("q_num")));
	        o.put("questionId", qNumToQuestionId.get(q_num)); // qNumToQuestionId 맵에서 해당 questionId를 찾아 선택지 옵션 정보에 설정

	        oCnt += surveyDao.createOption(o);
	        Long optionId = ((Number) o.get("optionId")).longValue();
	    }
	    result.put("OCNT", String.valueOf(oCnt));
	    return result;
	}
	
	// 업뎃한 설문아이디 반환
	 public int updatedSurvey(Map<String, Object> params) {
		 surveyDao.updateSurvey(params);
	     return surveyDao.getSurveyId(params);
	 }
	
	@Override
	public Map updateSurvey(Map param) {
		int uCnt = 0;
		int dCnt = 0;
	    Map result = new HashMap();
	    List<Map<String, Object>> surInfo = (List<Map<String, Object>>) param.get("surDataList");
	    //List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("surQInfo");
	    //List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("surOpInfo");
	    // 설문 정보 저장
        // surInfo : [{title=제목1, start_date=20240620, end_date=20240620, rowStatus=C}]
	    System.out.println("survey param!! : " + surInfo);
	    for(Map<String, Object> sur: surInfo) {
	    	String rowStatus = (String) sur.get("rowStatus");
	    	if(rowStatus.equals("U")) {
	    		// 설문 정보 수정저장
	    		uCnt += surveyDao.updateSurvey(sur);
	    	} else if(rowStatus.equals("D")) {
	    		// 설문 정보 삭제저장
	    		surveyDao.deleteSurveyResultBySurveyId(sur);
	    		surveyDao.deleteSurveyOptionsBySurveyId(sur);
	    		surveyDao.deleteSurveyQuestionsBySurveyId(sur);
	    		dCnt += surveyDao.deleteSurveyBasic(sur);
	    	}
	    	
	    }
	    result.put("UCNT", String.valueOf(uCnt));
	    result.put("DCNT", String.valueOf(dCnt));
	    return result;
	}
	
	@Override
	public Map updateSurveyInDetail(Map param) {
		int uCnt = 0;
		int dCnt = 0;
	    Map result = new HashMap();
	    Map<String, Object> surInfo = (Map<String, Object>) param.get("surDataMap");
	    //List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("surQInfo");
	    //List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("surOpInfo");
	    // 설문 정보 저장
        // surInfo : [{title=제목1, start_date=20240620, end_date=20240620, rowStatus=C}]
	    System.out.println("survey param!! : " + surInfo);
	    // 설문 정보 수정저장
	    uCnt += surveyDao.updateSurvey(surInfo);
	    
	    result.put("UCNT", String.valueOf(uCnt));
	    return result;
	}

	@Override
	public List<Map> getDetail(Map param) {
		return surveyDao.getDetail(param);
	}

	@Override
	public Map updateSurveyBasic(Map param) {
		int uCnt = 0;
		Map result = new HashMap();
		
		String rowStatus = (String) param.get("rowStatus");
		uCnt += surveyDao.updateSurveyBasic(param);
		
		result.put("UCNT", String.valueOf(uCnt));
		return result;
	}

	@Override
	public List<Map> updateSurveyQuestionsAndOptions(List param) {
		Map result = new HashMap();
		List<Map> l = new ArrayList<>();
		return l;
		
	}

	@Override
	public Map saveResult(Map param) {
		int cCnt = 0;
		Map result = new HashMap();
		Map<String, Object> surDataMap = (Map<String, Object>) param.get("surDataMap");
		Long survey_id = ((Number) surDataMap.get("survey_id")).longValue();
		
		List<Map<String, Object>> dlt_participateList = (List<Map<String, Object>>) param.get("dlt_participateList");
		
		Map<String, Object> userInfo = (Map<String, Object>) param.get("userInfo");
		String user_id = (String) userInfo.get("EMP_CD");
		
		Map<String, Object> p = new HashMap<>();
		
		for(Map<String, Object> responsePerQuestion : dlt_participateList) {
			p.put("survey_id", survey_id);
			p.put("user_id", user_id);
			p.put("question_id", responsePerQuestion.get("question_id"));
			p.put("sel_option_num", responsePerQuestion.get("sel_option_num"));
			p.put("option_id", responsePerQuestion.get("option_id"));
			p.put("reason", responsePerQuestion.get("reason"));
			cCnt += surveyDao.saveResult(p);
		}
		result.put("CCNT", String.valueOf(cCnt));
		return  result;
	}

	@Override
	public boolean hasUserParticipated(Map p) {
		return surveyDao.hasUserParticipated(p);
	}
	
	@Override
	public List<Map> getResponse(Map param) {
		return surveyDao.getResponse(param);
	}

	@Override
	public List<Map> getResponseCount(Map param) {
		return surveyDao.getResponseCount(param);
	}

	@Override
	public Map getParticipants(Map param) {
		Map result = new HashMap();
		int n = surveyDao.getParticipantCount(param);
		result.put("number", n);
		return result;
	}

	@Override
	public List<Map> selectReasonsPerOption(Map param) {
		return surveyDao.selectReasonsPerOption(param);
	}

	@Override
	public Map removeSurvey(Map param) {
		int dCnt = 0;
	    Map result = new HashMap();
	    Map<String, Object> sur = (Map<String, Object>) param.get("surDataMap");
	    //List<Map<String, Object>> surQInfo = (List<Map<String, Object>>) param.get("surQInfo");
	    //List<Map<String, Object>> surOpInfo = (List<Map<String, Object>>) param.get("surOpInfo");
	    // 설문 정보 저장
        // surInfo : [{title=제목1, start_date=20240620, end_date=20240620, rowStatus=C}]
	    System.out.println("param!! : " + sur);
	    
		// 설문 정보 삭제저장
		surveyDao.deleteSurveyResultBySurveyId(sur);
		surveyDao.deleteSurveyOptionsBySurveyId(sur);
		surveyDao.deleteSurveyQuestionsBySurveyId(sur);
		dCnt += surveyDao.deleteSurveyBasic(sur);
	    	

	    result.put("DCNT", String.valueOf(dCnt));
	    return result;
	}




}
