export default {
  title: '固件更新',
  sub_title: '进行系统固件更新操作',
  fw_update_warning_title: '警告！',
  fw_update_entrance: '进入固件更新',
  fw_update_warning_msg: `进入更新模式后，将禁用顶部和左侧功能栏，点击“终止固件更新”后开启使用。
                          上传镜像文件后其他的网页和服务将无法正常工作。`,
  fw_src: '选择镜像来源',
  fw_src_placeholder: '镜像来源',
  fw_src_error: '请选择镜像来源',
  local_fw: '本地上传',
  tftp_fw: '从TFPT服务器下载',
  tftp_addr: 'TFTP服务器地址',
  tftp_addr_placeholder: '服务器IP',
  tftp_addr_error: '请输入正确的IP地址',
  tftp_file: '文件名',
  tftp_file_error: '请输入文件名',
  fw_file: '选择镜像文件',
  fw_update: '刷新镜像文件',
  upload_text: '单击或拖动镜像文件到此区域进行上传',
  upload_hint: '仅支持单文件上传',
  next: '下一步',
  previous: '上一步',
  flash: '重启并刷新',
  abort: '终止固件更新',
  get_err_msg: '获取固件版本信息失败',
  upload_err_msg: '上传镜像文件失败',
  download_err_msg: '下载镜像文件失败',
  download_err_detail: '请检查tftp服务器地址及文件名是否正确',
  upload_done: '镜像文件上传成功',
  download_done: '镜像文件下载成功',
  flash_warning_msg: `点击按钮后，BMC将重启并执行镜像刷新操作，所有web服务均不可用。
                      几分钟后，请打开一个新窗口重新登陆`,
  reboot_done: 'BMC已重启',
  reboot_err_msg: 'BMC重启失败',

  helpMsg: `您可以在该页面对BMC、BIOS和CPLD的镜像进行更新操作`
}
