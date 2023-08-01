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
const createHackathonSchema = {
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

  mode: {
    in: ['body'],
    isObject: true,
    notEmpty: {
      errorMessage: 'mode cannot be empty',
    },
  },
  'mode.isOnline': {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid value for isOnline',
    },
    notEmpty: {
      errorMessage: 'isOnline cannot be empty',
    },
  },
  'mode.location': {
    in: ['body'],
    custom: {
      options: (value, { req }) => {
        if (!req.body.mode.isOnline && !value) {
          throw new Error('location is required when isOnline is false');
        }
        return true;
      },
    },
  },
  image: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid image value',
    },
    // custom: {
    //   options: (value) => {
    //     if (!/\.(png|jpg|jpeg)$/.test(value)) {
    //       throw new Error('Image must have a valid extension png, jpg, jpeg');
    //     }
    //     return true;
    //   },
    // },
    optional: true,
  },
  deadline: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid deadline value',
    },
    notEmpty: {
      errorMessage: 'deadline cannot be empty',
    },
  },
  // mode: {
  //   in: ['body'],
  //   isString: {
  //     errorMessage: 'Invalid mode value',
  //   },
  //   notEmpty: {
  //     errorMessage: 'mode cannot be empty',
  //   },
  // },
  rewards: {
    in: ['body'],
    isObject: true,
    notEmpty: {
      errorMessage: 'rewards cannot be empty',
    },
  },
  'rewards.title': {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid rewards title value',
    },
    notEmpty: {
      errorMessage: 'rewards title cannot be empty',
    },
  },
  'rewards.prize': {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid rewards prize value',
    },
    notEmpty: {
      errorMessage: 'rewards prize cannot be empty',
    },
  },
  size: {
    in: ['body'],
    isNumeric: {
      errorMessage: 'Invalid size value',
    },
    optional: true,
  },
  eligibility: {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid eligibility value',
    },
    notEmpty: {
      errorMessage: 'eligibility cannot be empty',
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
  link: {
    in: ['body'],
    isURL: true,
    notEmpty: true,
  },
  date: {
    in: ['body'],
    isDate: true,
    notEmpty: true,
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
};

const deleteSchema = {
  id: {
    in: ['body'],
    isString: true,
    optional: true,
  },
};

export const hackathonValidationSchema = {
  idSchema,
  slugSchema,
  createHackathonSchema,
  deleteSchema,
};
