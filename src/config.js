import React from 'react'
import { TextWidget, SelectWidget, DateWidget } from './RuleBuilder'


export const defaultConfig = {
  conjunctions: {
    And: {
      label: 'And',
      value: value => `(${value.join(' AND ')})`
    },
    Or: {
      label: 'Or',
      value: value =>
        value.size > 1 ? `(${value.join(' OR ')})` : value.first()
    }
  },
  fields: {
    name: {
      label: 'Name',
      widget: 'text',
      operators: [
        'Contains', 'IsNull'
      ]
    },
    date: {
      label: 'Date',
      widget: 'date',
      operators: ['Equals']
    },
    color: {
      label: 'Color',
      widget: [
        'select',
        {
          options: {
            yellow: 'Yellow',
            green: 'Green',
            orange: 'Orange'
          }
        }
      ],
      operators: ['Equals']
    }
  },
  operators: {
    Equals: {
      label: 'Equals',
      cardinality: 1,
      value: (value, field) => `${field}=${value.first()}`
    },
    NotEquals: {
      label: 'NotEquals',
      cardinality: 1,
      value: (value, field) => `${field}!=${value.first()}`
    },
    Contains: {
      label: 'Contains',
      cardinality: 1,
      value: (value, field) => `${field}%${value.first()}`
    },
    More: {
      label: 'More',
      cardinality: 1,
      value: (value, field) => `${field}>${value.first()}`
    },
    Less: {
      label: 'Less',
      cardinality: 1,
      value: (value, field) => `${field}<${value.first()}`
    },
    MoreOrEquals: {
      label: 'MoreOrEquals',
      cardinality: 1,
      value: (value, field) => `${field}>=${value.first()}`
    },
    LessOrEquals: {
      label: 'LessOrEquals',
      cardinality: 1,
      value: (value, field) => `${field}<=${value.first()}`
    },
    IsNull: {
      label: 'IsNull',
      cardinality: 0,
      value: (value, field) => `${field}=null}`
    },
    IsNotNull: {
      label: 'IsNotNull',
      cardinality: 0,
      value: (value, field) => `${field}!=null}`
    }
  },
  widgets: {
    text: {
      factory: props => <TextWidget {...props} />
    },
    select: {
      factory: props => <SelectWidget {...props} />
    },
    date: {
      factory: props => <DateWidget {...props} />
    }
  },
  settings: {
    maxNesting: 5
  }
}

export default defaultConfig
