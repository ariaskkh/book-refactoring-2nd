// 단계 쪼개기

// ex1 상품 결제 금액 계산 코드
function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity); // 중간 데이터 구조
  return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
  // 첫 번째 단계를 처리하는 함수
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount,
  };
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}
