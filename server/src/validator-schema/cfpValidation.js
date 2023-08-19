const idSchema = {
  id: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid id',
    },
    notEmpty: {
      errorMessage: 'id cannot be empty',
    },
  },
};

const slugSchema = {
  slug: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid slug',
    },
    notEmpty: {
      errorMessage: 'Slug cannot be empty',
    },
  },
};

const createCfpSchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  slug: { in: ['body'], isString: true, notEmpty: true },
  organizer: { in: ['body'], isString: true, notEmpty: true },
  description: { in: ['body'], isString: true, notEmpty: true },

  address: {
    in: ['body'],
    isObject: true,
    notEmpty: {
      errorMessage: 'address cannot be empty',
    },
  },
  'address.isOnline': {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid value for isOnline',
    },
    notEmpty: {
      errorMessage: 'isOnline cannot be empty',
    },
  },
  'address.location': {
    in: ['body'],
    custom: {
      options: (value, { req }) => {
        if (!req.body.address.isOnline && !value) {
          throw new Error('location is required when isOnline is false');
        }
        return true;
      },
    },
  },
  image: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Image must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    optional: true,
  },
  date: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid date value',
    },
    notEmpty: {
      errorMessage: 'date cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    isNumeric: {
      errorMessage: 'Invalid duration value',
    },
    notEmpty: {
      errorMessage: 'duration cannot be empty',
    },
  },
  tags: {
    in: ['body'],
    isArray: {
      errorMessage: 'Tags must be an array',
      options: { min: 1 },
    },
    notEmpty: {
      errorMessage: 'Tags array must not be empty',
    },
  },
  logo: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Logo must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    optional: true,
  },
  link: {
    in: ['body'],
    isURL: true,
    notEmpty: true,
  },
  deadline: {
    in: ['body'],
    isDate: true,
    notEmpty: true,
  },
  topics: {
    in: ['body'],
    isArray: true,
    notEmpty: true,
  },
  guidelines: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
};

const deleteSchema = {
  id: {
    in: ['body'],
    isString: true,
    optional: true,
  },
};

export const cfpValidationSchema = {
  idSchema,
  slugSchema,
  createCfpSchema,
  deleteSchema,
};
