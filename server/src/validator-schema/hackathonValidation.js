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
  organizer: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid organizer',
    },
    notEmpty: {
      errorMessage: 'Organizer cannot be empty',
    },
  },
  description: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid description',
    },
    notEmpty: {
      errorMessage: 'Description cannot be empty',
    },
  },
  mode: {
    in: ['body'],
    custom: {
      options: (value) => {
        // if (typeof JSON.parse(value) !== 'object') {
        //   throw new Error('mode must be an object');
        // }
        if (
          JSON.parse(value).isOnline === false &&
          JSON.parse(value).location.length === 0
        ) {
          throw new Error('If hackathon is offline it should have a location');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'mode cannot be empty',
    },
  },
  image: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid image',
    },
    optional: true,
  },
  deadline: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid deadline value',
    },
    notEmpty: {
      errorMessage: 'Deadline cannot be empty',
    },
  },
  startDate: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid startDate value',
    },
    notEmpty: {
      errorMessage: 'startDate cannot be empty',
    },
  },
  // mode: {
  //   in: ['body'],
  //   isString: {
  //     errorMessage: 'Invalid mode',
  //   },
  //   notEmpty: {
  //     errorMessage: 'Mode cannot be empty',
  //   },
  // },
  rewards: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Rewards must be an array');
        }
        return true;
      },
      optional: true,
    },
  },
  size: {
    in: ['body'],
    isInt: {
      errorMessage: 'Invalid size value',
    },
    optional: true,
  },
  eligibility: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid eligibility',
    },
    notEmpty: {
      errorMessage: 'Eligibility cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    isInt: {
      errorMessage: 'Invalid duration value',
    },
    notEmpty: {
      errorMessage: 'Duration cannot be empty',
    },
  },
  tags: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Tags must be an array');
        }
        if (JSON.parse(value).length < 1) {
          throw new Error('Tags array must contain at least one item');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Tags array must not be empty',
    },
  },
  link: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid link',
    },
    notEmpty: {
      errorMessage: 'Link cannot be empty',
    },
  },
  logo: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid logo',
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
