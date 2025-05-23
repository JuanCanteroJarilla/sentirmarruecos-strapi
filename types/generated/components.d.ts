import type { Schema, Struct } from '@strapi/strapi';

export interface ItinerariesDay extends Struct.ComponentSchema {
  collectionName: 'components_itineraries_days';
  info: {
    description: '';
    displayName: 'day';
  };
  attributes: {
    dayDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'itineraries.day': ItinerariesDay;
    }
  }
}
