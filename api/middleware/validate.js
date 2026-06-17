module.exports = function validate(schema) {
  return (req, res, next) => {
    const errors = [];
    if (schema.body && req.body) {
      Object.entries(schema.body).forEach(([field, rules]) => {
        const value = req.body[field];
        if (rules.required && !value) {
          errors.push(`${field} is required`);
        }
        if (rules.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.push(`${field} must be a valid email`);
        }
        if (rules.minLength && value && value.length < rules.minLength) {
          errors.push(`${field} must be at least ${rules.minLength} characters`);
        }
      });
    }
    if (errors.length) {
      return res.status(400).json({ error: 'Validation failed', details: errors });
    }
    next();
  };
};
