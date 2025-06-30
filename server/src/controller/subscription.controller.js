const Subscription = require('../models/subscription.model');

// Create a new subscription
exports.createSubscription = async (req, res) => {
  try {
    const { plan, renewalDate } = req.body;

    const subscription = new Subscription({
      user: req.user.id,
      plan,
      renewalDate,
    });

    await subscription.save();

    res.json(subscription);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getUserSubscription = async (req, res) => {
    try {
      const subscription = await Subscription.findOne({ user: req.user.id });
  
      if (!subscription) {
        return res.status(404).json({ msg: 'Subscription not found' });
      }
  
      res.json(subscription);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  
  exports.cancelSubscription = async (req, res) => {
    try {
      const subscription = await Subscription.findOne({ user: req.user.id });
  
      if (!subscription) {
        return res.status(404).json({ msg: 'Subscription not found' });
      }
  
      subscription.status = 'canceled';
      subscription.endsAt = Date.now();
  
      await subscription.save();
  
      res.json({ msg: 'Subscription canceled' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  