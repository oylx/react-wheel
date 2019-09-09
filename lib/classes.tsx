function scopedClassMaker(prefix: string) {
  return function x(name?: string,options?:{extra:string}) {
    const result = [prefix,name].filter(Boolean).join('-');
    if(options && options.extra){
      return [result,options && options.extra].filter(Boolean).join(' ');
    }else{
      return result
    }
    return
  }
}
export {scopedClassMaker}