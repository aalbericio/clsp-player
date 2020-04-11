/**
 * This is the entrypoint for using the CLSP Player distributable file.  If you
 * are importing / requiring the CLSP Player source, it is recommended that you
 * do not use this file.
 */

import 'srcdoc-polyfill';
import IovCollection from './iov/IovCollection';
// import TourController from './iov/TourController';
import utils from './utils/utils';

// import '../styles/clsp-player.scss';

window.IovCollection = IovCollection;
// window.TourController = TourController;

if (!window.clspUtils) {
  window.clspUtils = utils;
}

/*
export default {
  IovCollection,
  TourController,
};
 */

// const IovCollection = require('./iov/IovCollection');

module.exports = require('./iov/IovCollection');
