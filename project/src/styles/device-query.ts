import { DeviceQueryType } from "../types/device-query"
import { SizeDeviceType } from "../types/size-device"

export const SizeDevice:SizeDeviceType = {
    mobile: 320,
    tablet: 768,
    desktop: 1440,
  }
  
  export const DeviceQuery:DeviceQueryType = {
    mobile: `(min-width: ${SizeDevice.mobile}px)`,
    tablet: `(min-width: ${SizeDevice.tablet}px)`,
    desktop: `(min-width: ${SizeDevice.desktop}px)`,
  
  }
