package com.inswave.wrm.survey.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("SurveyDao")
public interface SurveyDao {
	
	// 설문목록 조회
	public List<Map> getList(Map param);
	// 설문 등록
	public int createSurvey(Map param);
	public int createQuestion(Map param);
	public int createOption(Map param);
	// 설문 상세 조회
	public List<Map> getDetail(Map param);
	
	// 설문 수정
	public int updateSurveyBasic(Map param);
	
	public int updateSurvey(Map param);
	
	// 설문 삭제
	public int deleteSurveyBasic(Map<String, Object> param);
	public int deleteSurveyQuestionsBySurveyId(Map<String, Object> param);
	public int deleteSurveyOptionsBySurveyId(Map<String, Object> param);
	public int deleteSurveyResultBySurveyId(Map<String, Object> param);
	
	public int getSurveyId(Map<String, Object> param);
	
	// 설문 응답(참여) 저장
	public int saveResult(Map param);
	// 설문 참여여부 조회
	public boolean hasUserParticipated(Map param);
	// 특정 사용자가 참여한 설문 리스트 조회
	public List<Map> getParticipatedSurveys(Map param);
	// 특정 사용자의 특정 설문에 대한 응답 조회
	public List<Map> getResponse(Map param);
	
	// 설문 결과 질문별 항목들,항목별 응답수 조회
	public List<Map> getResponseCount(Map param);
	// 선택사유 조회
	public List<Map> selectReasonsPerOption(Map param);
	// 특정 설문의 참여자수 조회
	public int getParticipantCount(Map param);
}
