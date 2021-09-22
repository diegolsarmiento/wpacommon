export enum OrderStatus {
  // When the order has been created, but the
  // post it is trying to order has not been reserved
  Created = 'created',

  // The post the order is trying to reserve has already
  // been reserved, or when the user has cancelled the order.
  // The order expires before payment
  Cancelled = 'cancelled',

  // The order has successfully reserved the post
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the post and the user has
  // provided payment successfully
  Complete = 'complete',
}
