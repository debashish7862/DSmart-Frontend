import React from "react";
import "./fail.scss";
function Fail() {
  return (
    <div class="fail">
      <div class="printer-top"></div>

      <div class="paper-container">
        <div class="printer-bottom"></div>

        <div class="paper">
          <div class="main-contents">
            <div class="success-icon">&#10060;</div>
            <div class="success-title">Payment Failed</div>
            <div class="success-description">
              Oops! It seems there was an issue processing your payment.
              Unfortunately, the transaction could not be completed
              successfully. Please double-check your payment details and try
              again. If the problem persists, feel free to contact our support
              team for assistance. We apologize for any inconvenience this may
              have caused.
            </div>
            <div class="order-details">
              <div class="order-number-label">Failed Transaction ID</div>
              <div class="order-number">123987654</div>
              <div class="complement">Sorry for this inconvenience! </div>
            </div>
          </div>
          <div class="jagged-edge"></div>
        </div>
      </div>
    </div>
  );
}

export default Fail;
