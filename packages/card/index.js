import { BasePlugin } from '~/base/index.js';
import mcwCardActionButtons from './card-action-buttons.js';
import mcwCardActionIcons from './card-action-icons.js';
import mcwCardActions from './card-actions.js';
import mcwCardMedia from './card-media.js';
import mcwCardPrimaryAction from './card-primary-action.vue';
import mcwCard from './card.js';

export {
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
};

export default BasePlugin({
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
});
