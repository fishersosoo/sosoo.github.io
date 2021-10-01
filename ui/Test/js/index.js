/*
 * @Author: Souma
 * @LastEditTime: 2021-10-02 03:14:14
 */
'use strict';
import { actions } from '../../../resources/data/actions.js';
import { jobList } from '../../../resources/data/job.js';
import { logProcessing } from '../../../resources/function/logProcessing.js';
import { compareSame } from '../../../resources/function/compareSameGroup.min.js';
import { TTS } from '../../../resources/function/TTS.js';
import { loadItem, saveItem } from "../../../resources/function/localStorage.min.js";
let party = [];
let player = '';
addOverlayListener('PartyChanged', (e) => (party = e.party || party));
addOverlayListener('ChangePrimaryPlayer', (e) => (player = e.charID.toString(16).toUpperCase()));
addOverlayListener('LogLine', (e) => {});
addOverlayListener('ChangeZone', () => {});
addOverlayListener('onPartyWipe', () => {});
startOverlayEvents();
let namespace = '';
let load = (t, a = '') => loadItem(namespace, t, a);
let save = (t, a) => saveItem(namespace, t, a);