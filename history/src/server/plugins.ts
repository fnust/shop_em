import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';

const plugins = [
  {
    plugin: Inert,
  },
  {
    plugin: Vision,
  },
];

export default plugins;
