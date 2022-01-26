import {_get, _postNoWithCredentials, _postImage} from './index'
//获取七牛云上次凭证
export const uploadToken = (data) => {
  let req = {
    data,
    url: 'service/uploadtoken'
  };
  return _get(req);
}

// //上传
// export const upload = (data) => {
//   let formData = new FormData();
//   Object.keys(data).forEach(key => {
//     formData.append(key, data[key])
//   })
//   let req = {
//     data: formData,
//     url: '/upload-z2.qiniup.com/'
//   }
//   return _postNoWithCredentials(req);
// }

//上传
export const upload = (data) => {
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append('content', data[key])
    })
    formData.append('access_token', 'fe5c1f05d4331bf58f0316cfdb11990c')
    formData.append('message', 'a')
    
    let req = {
      data: formData,
      url: 'https://gitee.com/api/v5/repos/ultraman-agul/gitee-drawing-bed/contents//meituan'
    }
    return _postImage(req);
  }
