// 중첩 조건문을 보호 구문으로 바꾸기

// ex1)
function playAmount(employee) {
  if (employee.isSeparated) {
    // 퇴사한 직원인가?
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    // 은퇴한 직원인가?
    return { amount: 0, eeasonCode: "RET" };
  }

  // 급여 계산 로직
  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

// ex2) 조건 반대로 만들기
function adjustedCapital(anInstrument) {
  if (
    anInstrument.capital <= 0 ||
    !anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  ) {
    return 0;
  }
  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
