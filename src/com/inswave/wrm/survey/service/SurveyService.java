package com.inswave.wrm.survey.service;

import java.util.List;
import java.util.Map;

public interface SurveyService {
	
	public List<Map> getList(Map param);
	public List<Map> getParticipatedSurveys(Map param);
	
	// 등록, 수정에서 사용
	public Map saveSurvey(Map param);
	// 등록에서 사용
	public Map saveQuestion(Map param, Long surveyId);
	public Map saveOption(Map param, Long surveyId, List<Long> questionIds);
	// 수정에서 사용
	public Map saveQuestionBySaveAll(Map param, Long surveyId);
	public Map saveOptionBySaveAll(Map param, Long surveyId, List<Long> questionIds);

	public List<Map> getDetail(Map param);

	public Map updateSurveyBasic(Map param);

	public List<Map> updateSurveyQuestionsAndOptions(List param);
	
	public Map updateSurvey(Map param); // 목록에서 마스터 설문 업뎃
	public Map updateSurveyInDetail(Map param); // 상세에서 마스터 설문 업뎃
	
	public Map saveResult(Map param);

	public boolean hasUserParticipated(Map param);

	public List<Map> getResponse(Map param); // 특정 사용자의 특정 설문에 대한 응답 내역 조회

	public List<Map> getResponseCount(Map param);

	public Map getParticipants(Map param);

	public List<Map> selectReasonsPerOption(Map param);

	public Map removeSurvey(Map param);


}
