import classes , { scopedClassMaker } from './../classes'

describe ( 'classes' , () => {
  it ( '接受1个className' , () => {
    const result = classes ( 'a' )
    expect ( result ).toEqual ( 'a' )
  } )
  it ( '接受2个className' , () => {
    const result = classes ( 'a' , 'b' )
    expect ( result ).toEqual ( 'a b' )
  } )
  it ( '接受undefined' , () => {
    const result = classes ( 'a' , undefined )
    expect ( result ).toEqual ( 'a' )
  } )
  it ( '接受中文' , () => {
    const result = classes ( 'a' , '中文' )
    expect ( result ).toEqual ( 'a 中文' )
  } )
  it ( '接受空' , () => {
    const result = classes ()
    expect ( result ).toEqual ( '' )
  } )
} )
describe ( 'scopedClassMaker' , () => {
  it ( '接受字符串或对象' , () => {
    const sc = scopedClassMaker ( 'fui-layout' );
    expect ( sc ( '' ) ).toEqual ( 'fui-layout' )
    expect ( sc ( 'x' ) ).toEqual ( 'fui-layout-x' )
    expect ( sc ( { y: true , z: false } ) ).toEqual ( 'fui-layout-y' )
    expect ( sc ( { y: true , z: true } ) ).toEqual ( 'fui-layout-y fui-layout-z' )
    expect ( sc ( { y: true , z: true } , { extra: 'red' } ) ).toEqual ( 'fui-layout-y fui-layout-z red' )
  } )
} )