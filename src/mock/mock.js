import Mock from 'mockjs'
import homeMultidata from './index.js'
import goods from './goods.js'

Mock.mock('/home/multidata', 'get', homeMultidata)
Mock.mock('/home/goods', 'get', goods)
