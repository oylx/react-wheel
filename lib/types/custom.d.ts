/**
 * 给所有svg加默认导出
 * eg:import wechat from './icons/wechat.svg'
 */
declare module '*.svg' {
    const content: any;
    export default content;
}
