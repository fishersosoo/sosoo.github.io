/*
 * @Author: Souma
 * @LastEditTime: 2021-08-16 05:18:09
 */
"use strict";
let compareSameGroup = {
  16483: 0, //根本用不出来的燕回返→0
  16484: 16486, //回返彼岸花→回返纷乱雪月花
  16485: 16486, //回返天下五剑→回返纷乱雪月花
  16487: 0, //照破
  2874: 0, //虹吸弹
  2890: 0, //弹射
  2872: 16500, //热弹→空气锚
  // 15997: 0, //标准舞步→0
  // 16191: 15997, //单色标准舞步→双色标准舞步
  // 16192: 15997, //双色标准舞步→双色标准舞步
  // 15998: 0, //技巧舞步→0
  // 16193: 15998, //单色技巧舞步结束→技巧舞步
  // 16194: 15998, //双色技巧舞步结束→技巧舞步
  // 16195: 15998, //三色技巧舞步结束→技巧舞步
  // 16196: 15998, //四色技巧舞步结束→技巧舞步
  3551: 16464, //直觉→勇猛
  16510: 16508, //能量抽取→能量吸收
  3581: 16549, //龙神附体→不死鸟附体
  16801: 184, //内力迸发：大地之怒→内力迸发
  16802: 184, //内力迸发：大气爆发→内力迸发
  16803: 184, //内力迸发：地狱之火炎→内力迸发
  7496: 16481, //必杀剑·红莲→必杀剑·闪影
  16494: 3562, //影噬箭→侧风诱导箭
  16499: 16498, //毒菌冲击→钻头
  16527: 7515, //交剑→移转
  16791: 16509, //灵攻I：黄宝石之辉→灵攻I
  16793: 16509, //灵攻I：下行突风→灵攻I
  16795: 16509, //灵攻I：大地之铠→灵攻I
  16797: 16509, //灵攻I：大气风斩→灵攻I
  16799: 16509, //灵攻I：深红旋风→灵攻I
  16792: 16512, //灵攻II：黄宝石之光→灵攻II
  16794: 16512, //灵攻II：绿宝石之辉→灵攻II
  16796: 16512, //灵攻II：山崩→灵攻II
  16798: 16512, //灵攻II：螺旋气流→灵攻II
  16800: 16512, //灵攻II：烈焰碎击→灵攻II
  38: 7389, //狂暴→原初的解放
  7415: 16502, //超档车式炮塔→超档后式人偶
  92: 16478, //跳跃→高跳
  23287: 23290, //如意大旋风→月下彼岸花
  18324: 18325, //类星体→正义飞踢
  23272: 23285, //天使的点心→马特拉魔术
  23280: 23285, //龙之力→马特拉魔术
  23273: 23275, //玄结界→斗灵弹
  11426: 11427, //飞翎雨→地火喷发
  11428: 11429, //山崩→轰雷
  52: 0, //战壕→0
  48: 0, //守护→0
  3629: 0, //深恶痛绝→0
  633: 0, //利爪→0
  634: 0, //黄宝石之光→0
  635: 0, //硬化→0
  636: 0, //冲撞→0
  637: 0, //突风→0
  638: 0, //吹飞→0
  639: 0, //下行突风→0
  640: 0, //绿宝石之光→0
  787: 0, //碎岩→0
  788: 0, //山崩→0
  789: 0, //大地之护→0
  790: 0, //地裂→0
  791: 0, //大地之怒→0
  792: 0, //烈风刃→0
  793: 0, //震荡波→0
  794: 0, //大气风斩→0
  795: 0, //歪风→0
  796: 0, //大气爆发→0
  797: 0, //深红旋风→0
  798: 0, //燃火强袭→0
  799: 0, //辉煌盾→0
  800: 0, //烈焰碎击→0
  801: 0, //地狱之火炎→0
  3580: 0, //三重灾祸→0
  7428: 0, //真龙波→0
  7429: 0, //龙神迸发→0
  7449: 0, //死亡轮回→0
  16514: 0, //灵泉之炎→0
  16515: 0, //炼狱之炎→0
  16516: 0, //不死鸟迸发→0
  16517: 0, //不死鸟之翼→0
  16518: 0, //天启→0
  16519: 0, //赤焰→0
  16520: 0, //黄宝石之辉→0
  16521: 0, //绿宝石之辉→0
  16522: 0, //大地之铠→0
  16523: 0, //螺旋气流→0
  3631: 0, //血债→0
  3640: 0, //跳斩→0
  16142: 0, //王室亲卫→0
  16154: 0, //粗分斩→0
  16461: 0, //调停→0
  28: 0, //钢铁信念→0
  3614: 0, //先天禀赋
  807: 0, //月光的沉默→0
  808: 0, //异想的炽光→0
  809: 0, //异想的辉光→0
  810: 0, //异想的柔光→0
  811: 0, //异想的流光→0
  804: 0, //异想的盟光→0
  16546: 0, //慰藉→0
  71: 0, //罗刹冲→0
  2259: 0, //天之印→0
  2261: 0, //地之印→0
  2262: 0, //缩地→0
  2263: 0, //人之印→0
  3582: 0, //死星核爆→0
  110: 0, //失血箭→0
  117: 0, //死亡箭雨→0
  16010: 0, //前冲步→0
  7546: 0, //真北→0
};
function compareSame(id) {
  id = parseInt(id, 16);
  let r = compareSameGroup[id];
  return r + 1 ? r : id;
}
export { compareSame, compareSameGroup };
