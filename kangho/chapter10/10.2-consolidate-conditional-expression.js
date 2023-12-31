// 조건식 통합하기

//ex1) or 사용하기
function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;
  // 장애 수당 계산
}

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}

// ex2) and 사용하기

if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
return 0.5;
