import request from '@/utils/request'

/**
 * 添加属性分组信息
 */
export function addAttrGroup(attrgroup) {
    return request({
        url: `/product/attrgroup/add`,
        method: 'post',
        data: attrgroup
    })
}

/**
 * 根据属性分组id修改属性分组信息
 */
export function updateAttrGroup(attrgroup) {
    return request({
        url: `/product/attrgroup/update`,
        method: 'put',
        data: attrgroup
    })
}

/**
 * 根据属性分组id删除属性分组信息，包含单个删除和批量删除
 */
export function deleteAttrGroupById(attrgroupIds) {
    return request({
        url: `/product/attrgroup/delete`,
        method: 'delete',
        data: attrgroupIds,
    })
}

/**
 * 查询所有的属性分组信息
 * @returns 返回请求到的数据
 */
export function queryAttrGroupById(attrgroupId) {
    return request({
        url: `/product/attrgroup/${attrgroupId}`,
        method: 'get',
    })
}

/**
 * 查询所有的属性分组信息
 * @returns 返回请求到的数据
 */
export function queryAttrGroupByPage(pageNo = 1, pageSize = 8, searchValue = "", categoryId = 0) {
    return request({
        url: `/product/attrgroup/list`,
        method: 'get',
        params: {
            pageNo: pageNo,
            pageSize: pageSize,
            searchValue: searchValue,
            catelogId: categoryId
        }
    })
}
