import { ACTIVITY_HUJIANG_COM } from './hosts';
import { ACTIVITY_CODE } from 'constants/config';


const testIP = '172.16.18.25';

// common
export const LOGIN_INFO = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/1605/user/access_token`;
export const SERVER_TIME = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/gettime`;

// index
export const TASK_DATA = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/statusv5`;
// export const TASK_DATA = `//${testIP}:4001/task`;
export const LOTTERY_CHANCE = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/usercoin`;
// export const LOTTERY_CHANCE = `//${testIP}:4001/get_chance_data`;
export const COLLECT_CAT = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/user/signs`;
// export const COLLECT_CAT = `//${testIP}:4001/signs`;
export const DO_DRAW = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/doaward`;
// export const DO_DRAW = `//${testIP}:4001/get_draw_result`;
export const POST_USER_INFO = `//${ACTIVITY_HUJIANG_COM}/v1/ztactivity/${ACTIVITY_CODE}/awardaddress`;
// export const POST_USER_INFO = `//${testIP}:4001/post_user_info`;
