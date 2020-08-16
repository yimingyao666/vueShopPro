import Mock from 'mockjs'
import homeMultidata from './index.js'

Mock.mock('/home/multidata', 'get', homeMultidata)
