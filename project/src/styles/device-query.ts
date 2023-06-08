import { DeviceQueryType } from "../type/device-query"
import { SizeDeviceType } from "../type/size-device"

export const SizeDevice:SizeDeviceType = {
    mobile: 320,
    tablet: 768,
    desktop: 1920,
  }
  
  export const DeviceQuery:DeviceQueryType = {
    mobile: `(min-width: ${SizeDevice.mobile}px)`,
    tablet: `(min-width: ${SizeDevice.tablet}px)`,
    desktop: `(min-width: ${SizeDevice.desktop}px)`,
  
  }
