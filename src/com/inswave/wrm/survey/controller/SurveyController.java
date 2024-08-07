package com.inswave.wrm.survey.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.inswave.wrm.survey.service.SurveyService;
import com.inswave.wrm.util.Result;
import com.inswave.wrm.util.UserInfo;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class SurveyController {
	
	@Autowired
	private SurveyService service;
	@Autowired
	private UserInfo user;
	
	@RequestMapping("/participation/list")
	public @ResponseBody Map<String, Object> getList(@RequestBody Map<String, Object> param) {
		System.out.println("목록 요청 받았다~");
		Result result = new Result();
		try {
			result.setData("surDataList", service.getList((Map) param.get("surSearchMap")));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 리스트가 조회 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 리스트를 가져오는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
	@RequestMapping("/participation/list_participate")
	public @ResponseBody Map<String, Object> getListInParticipateMenu(@RequestBody Map<String, Object> param) {
		System.out.println("참여에서 목록 요청 받았다~");
		Result result = new Result();
		System.out.println("======: "+param);
		try {
			result.setData("surDataList", service.getList((Map) param.get("surSearchMap")));
			result.setData("participatedSurDataList", service.getParticipatedSurveys((Map) param.get("userInfo")));
			result.setStatusMsg(result.STATUS_SUCESS, "참여한 설문 리스트가 조회 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "참여한 설문 리스트를 가져오는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
	@RequestMapping("/participation/user")
	public @ResponseBody Map<String, Object> getUser(HttpServletRequest request) {
		System.out.println("user 요청 받았다~");
		Result result = new Result();
		System.out.println(user.getUserId());
		Map<String, Object> m = new HashMap<>();
		try {
			m.put("EMP_CD", user.getUserId());
			result.setData("userInfo", m);
			result.setStatusMsg(result.STATUS_SUCESS, "유저가 조회 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "유저 정보를 가져오는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
	/**
	 * 등록 , 수정 팝업에서의 수정
	 * @param param
	 * @return
	 */
	@RequestMapping("/participation/save")
	public @ResponseBody Map<String, Object> saveSurvey(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		System.out.println("등록 요청 받았다~");
		System.out.println(param);
		Map hash = new HashMap();
		try {
			result.setData("surDataList", service.saveSurvey((Map) param));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 정보가 저장 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 정보 저장도중 오류가 발생하였습니다.");
		} 
		return result.getResult();
	}
	/**
	 * 목록에서 수정, 삭제
	 * @param param
	 * @return
	 */
	@RequestMapping("/participation/update")
	public @ResponseBody Map<String, Object> updateSurvey(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		System.out.println("목록에서의 수정 요청 받았다~");
		System.out.println(param);
		Map hash = new HashMap();
		try {
			result.setData("surDataList", service.updateSurvey((Map) param));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 정보가 저장 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 정보 저장 도중 오류가 발생하였습니다.");
		} 
		return result.getResult();
	}
	
	/**
	 * 상세에서의 마스터 설문 수정 요청 처리
	 * @param param
	 * @return
	 */
	@RequestMapping("/participation/update_detail")
	public @ResponseBody Map<String, Object> updateSurveyInDetail(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		System.out.println("상세에서의 수정 요청 받았다~");
		System.out.println(param);
		Map hash = new HashMap();
		try {
			result.setData("surDataList", service.updateSurveyInDetail((Map) param));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 정보가 저장 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 정보 저장 도중 오류가 발생하였습니다.");
		} 
		return result.getResult();
	}
	
	@RequestMapping("/participation/remove")
	public @ResponseBody Map<String, Object> removeSurvey(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		System.out.println("설문 삭제 요청 받았다~");
		System.out.println(param);
		Map hash = new HashMap();
		try {
			result.setData("surDataList", service.removeSurvey((Map) param));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 정보가 삭제 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 정보 삭제 도중 오류가 발생하였습니다.");
		} 
		return result.getResult();
	}
	
	@RequestMapping("/participation/view")
	public @ResponseBody Map<String, Object> getDetail(@RequestBody Map<String, Object> param) {

		System.out.println("상세 요청 받았다~");
		System.out.println(param);
		Result result = new Result();
		try {
			result.setData("surViewList", service.getDetail((Map) param.get("surDataMap")));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 상세가 조회 되었습니다.");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "설문 상세를 가져오는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
	/**
	 * 설문 참여
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/participation/participate")
	public @ResponseBody Map<String, Object> saveResult(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		Map hash = new HashMap();
		System.out.println("설문 참여 요청 받았다~");
		System.out.println(param);
		System.out.println(param.get("surDataMap")); // map
		System.out.println(param.get("dlt_participateList")); // list
		System.out.println(param.get("userInfo")); // map
		// {survey_id=60, title=참여설문 수정, creator=100001, start_date=2024-06-28, end_date=2024-06-28, state=진행중, created_at=2024-06-26 15:18:49, updated_at=2024-06-26 18:00:57}
		//[{question_id=76, sel_option_num=2, option_id=100, reason=11111, rowStatus=C}, {question_id=77, sel_option_num=1, option_id=101, reason=, rowStatus=C}, {question_id=78, sel_option_num=1, option_id=103, reason=33333, rowStatus=C}, {question_id=79, sel_option_num=2, option_id=106, reason=, rowStatus=C}]
		//{EMP_CD=100001}
		try {
			result.setData("surDataList", service.saveResult((Map) param));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 응답 데이터가 제출되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문 응답 데이터를 저장하는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
	@RequestMapping("/participation/getParticipateOrNot")
	public @ResponseBody Map<String, Object> getParticipateOrNot(@RequestBody Map<String, Object> param) {
		System.out.println("참여여부(참여한경우 응답내용까지) 조회 요청 받았다~");
		Result result = new Result();
		Map<String, Object> p = new HashMap<>();
		try {
			Map<String, Object> surDataMap = (Map<String, Object>) param.get("surDataMap");
			Long survey_id = ((Number) surDataMap.get("survey_id")).longValue();
			Map<String, Object> userInfo = (Map<String, Object>) param.get("userInfo");
			String user_id = (String) userInfo.get("EMP_CD");
			System.out.printf("login user: %s, userInfo: %s",user.getUserId(), user_id);
			p.put("survey_id", survey_id);
			p.put("user_id", user_id);
			boolean participateTF = service.hasUserParticipated(p);
			System.out.printf("참여 여부: %b",participateTF);
			
			if (participateTF==true) {
				result.setData("dlt_participateWriteList",service.getResponse(p)); 
				result.setData("userInfo", "true");				
			}
			else {
				result.setData("userInfo", "false");
			}
			
			result.setStatusMsg(result.STATUS_SUCESS, "참여여부 및 내역이 조회 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "참여 확인 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	/**
	 * 설문 결과
	 * @param param
	 * @return
	 */
	@RequestMapping("/participation/getResponseCount")
	public @ResponseBody Map<String, Object> getResponseCount(@RequestBody Map<String, Object> param) {
		System.out.println("질문별 항목들과 항목별 응답수 리스트 조회 요청 받았다~");
		Result result = new Result();
		Map<String, Object> p = new HashMap<>();
		System.out.println(param);
		try {
			result.setData("dlt_responseCountList", service.getResponseCount((Map) param.get("surDataMap")));
			result.setData("participants", service.getParticipants((Map) param.get("surDataMap")));
			result.setData("reasons", service.selectReasonsPerOption((Map) param.get("surDataMap")));
			result.setStatusMsg(result.STATUS_SUCESS, "설문 결과가 조회 되었습니다.");
		} catch (Exception ex) {
			result.setMsg(result.STATUS_ERROR, "설문결과를 가져오는 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	
}
