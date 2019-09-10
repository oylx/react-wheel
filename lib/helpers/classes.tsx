function classes(...names:(string | undefined)[]) {
    return names.filter((names)=>names).join(' ')
}
export default classes;

interface classToggles {
    [k: string]: boolean
}

function scopedClassMaker(prefix: string) {

    return function (name?: string | classToggles, options?: { extra: string | undefined }) {
        let result
        if (typeof name === 'string' || name === undefined) {
            result = [prefix, name].filter(Boolean).join('-');
        } else {
            // name ={hasAside:true,x:false,y:true}
            const names = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
            result = names.map(n => [prefix, n].filter(Boolean).join('-')).join(' ')
        }
        if (options && options.extra) {
            return [result, options && options.extra].filter(Boolean).join(' ');
        } else {
            return result
        }
    }
}

export {scopedClassMaker}