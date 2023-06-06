import { DeviceQueryType } from "../type/device-query"
import { SizeDeviceType } from "../type/size-device"

export const SizeDevice:SizeDeviceType = {
    mobile: 767,
    tablet: 1439,
    desktop: 1920,
  }
  
  export const DeviceQuery:DeviceQueryType = {
    mobile: `(max-width: ${SizeDevice.mobile}px)`,
    tablet: `(max-width: ${SizeDevice.tablet})px`,
    desktop: `(min-width: ${SizeDevice.desktop}px)`,
  
  }
