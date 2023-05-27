// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Payment {
  uint public nextPlanId;
  struct Plan {
    address merchant;
    address token;
    uint amount;
    uint frequency;
  }
  struct Subscription {
    address subscriber;
    uint start;
    uint nextPayment;
  }
  mapping(uint => Plan) public plans;
  mapping(address => mapping(uint => Subscription)) public subscriptions;

  event PlanCreated(
    address merchant,
    uint planId,
    uint date
  );
  event SubscriptionCreated(
    address subscriber,
    uint planId,
    uint date
  );
  event SubscriptionCancelled(
    address subscriber,
    uint planId,
    uint date
  );
  event PaymentSent(
    address from,
    address to,
    uint amount,
    uint planId,
    uint date
  );

  function createPlan(address merchant,address token, uint amount, uint frequency) external {
    require(token != address(0), 'address cannot be null address');
    require(amount > 0, 'amount needs to be > 0');
    require(frequency > 0, 'frequency needs to be > 0');
    plans[nextPlanId] = Plan(
      merchant, 
      token,
      amount, 
      frequency
    );
    nextPlanId++;
  }

  function subscribe(address _subscriber,uint planId) external {
    IERC20 token = IERC20(plans[planId].token);
    Plan storage plan = plans[planId];
    require(plan.merchant != address(0), 'this plan does not exist');

    token.transferFrom(_subscriber, plan.merchant, plan.amount);  
    emit PaymentSent(
      _subscriber, 
      plan.merchant, 
      plan.amount, 
      planId, 
      block.timestamp
    );

    subscriptions[_subscriber][planId] = Subscription(
      _subscriber, 
      block.timestamp, 
      block.timestamp + plan.frequency
    );
    emit SubscriptionCreated(_subscriber, planId, block.timestamp);
  }

  function cancel(address _subscriber, uint planId) external {
    Subscription storage subscription = subscriptions[_subscriber][planId];
    require(
      subscription.subscriber != address(0), 
      'this subscription does not exist'
    );
    delete subscriptions[_subscriber][planId]; 
    emit SubscriptionCancelled(_subscriber, planId, block.timestamp);
  }

  function pay(address subscriber, uint planId) external {
    Subscription storage subscription = subscriptions[subscriber][planId];
    Plan storage plan = plans[planId];
    IERC20 token = IERC20(plan.token);
    require(
      subscription.subscriber != address(0), 
      'this subscription does not exist'
    );
    require(
      block.timestamp > subscription.nextPayment,
      'not due yet'
    );

    token.transferFrom(subscriber, plan.merchant, plan.amount);  
    emit PaymentSent(
      subscriber,
      plan.merchant, 
      plan.amount, 
      planId, 
      block.timestamp
    );
    subscription.nextPayment = subscription.nextPayment + plan.frequency;
  }
}
