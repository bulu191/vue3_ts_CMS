import { request } from "@/service";

// 获取用户列表
export function reqGetUserList(data) {
  return request.post({
    url: "/users/list",
    data,
  });
}

// 删除一个用户
export function reqDeleteUser(id: number) {
  return request.delete({
    url: "/users/" + id,
  });
}

// 修改用户
export function reqUpdateUser(id: number, data: any) {
  return request.patch({
    url: "/users/" + id,
    data,
  });
}

// 添加用户
export function reqAddUSer(data: any) {
  return request.post({
    url: "/users",
    data,
  });
}

// 根据页面的名称获取数据
export function reqGetPageList(pageName: string, queryInfo?: any) {
  return request.post({
    url: `/${pageName}/list`,
    data: queryInfo,
  });
}

// 根据页面的名称删除一条数据
export function reqDeletePage(pageName: string, id: number) {
  return request.delete({
    url: `/${pageName}/` + id,
  });
}

// 根据页面的名称修改数据
export function reqUpdatePage(pageName: string, id: number, data: any) {
  return request.patch({
    url: `/${pageName}/` + id,
    data,
  });
}

// 添加一条数据
export function reqAddPage(pageName: string, data: any) {
  return request.post({
    url: `/${pageName}`,
    data,
  });
}
