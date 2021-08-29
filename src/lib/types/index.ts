export enum Endpoint {
  DEFAULT = 'main_web_app.cgi',
  NETWORK = 'fastmile_radio_status_web_app.cgi',
  STATUS = 'dashboard_device_info_status_web_app.cgi',
}

export interface DeviceAppStatus {
  ManufacturerOUI: string;
  ProductClass: string;
  SerialNumber: string;
  HardwareVersion: string;
  SoftwareVersion: string;
  Description: string;
  UpTime: number;
  lot_number: string;
}

export interface DeviceCfg {
  _oid: number;
  HostName: string;
  IPAddress: string;
  MACAddress: string;
  AddressSource: string;
  Active: number;
  InterfaceType: string;
  LeaseTimeRemaining: number;
  X_ALU_COM_LastActiveTime: string;
}

export interface LinkStatus5G {
  linkStatus: string;
}

export interface LinkStatusLTE {
  linkStatus: string;
}

export interface StatusResponse {
  gwmodel: string;
  device_app_status: DeviceAppStatus[];
  device_cfg: DeviceCfg[];
  link_status_5G: LinkStatus5G[];
  link_status_LTE: LinkStatusLTE[];
  g_curr_weblang: string;
  can_end_user_config_wifi_port_mode: number;
  g_has_10g_port: number;
  g_has_xlink_sync_switch: number;
  g_has_bridge_wan_set: number;
  g_has_btha_support: number;
  g_has_vcsa_support: number;
  g_has_bcgw_support: number;
  g_has_Dashboard_mode: number;
  HAS_WIFI_PORT_MODE: number;
  HAS_PORT_MODE: number;
  HAS_DONGLE_SUPPORT: number;
  HAS_VOICE_CFG_SUPPORT: number;
  IS_VEIP_MODE: number;
  IS_AP_BRIDGE_MODE: number;
}

export interface ConnectionStatus {
  ConnectionStatus: number;
}

export interface ApnCfg {
  oid: number;
  Enable: number;
  APN: string;
  X_ALU_COM_IPAddressV4: string;
  X_ALU_COM_IPAddressV6: string;
}

export interface CellularStat {
  BytesReceived: number;
  BytesSent: number;
}

export interface Stat {
  BytesSent: number;
  BytesReceived: number;
  PacketsSent: number;
  PacketsReceived: number;
}

export interface EthernetStat {
  Enable: number;
  Status: string;
  stat: Stat;
}

export interface Cell5GStat {
  PhysicalCellID: string;
  SNRCurrent: number;
  RSRPCurrent: number;
  RSRPStrengthIndexCurrent: number;
  RSRQCurrent: number;
  Downlink_NR_ARFCN: number;
  SignalStrengthLevel: number;
  Band: string;
}

export interface Cell5GStatsCfg {
  stat: Cell5GStat;
}

export interface Cell4GStat {
  PhysicalCellID: string;
  RSSICurrent: number;
  SNRCurrent: number;
  RSRPCurrent: number;
  RSRPStrengthIndexCurrent: number;
  RSRQCurrent: number;
  DownlinkEarfcn: number;
  SignalStrengthLevel: number;
  Band: string;
}

export interface CellLTEStatsCfg {
  stat: Cell4GStat;
}

export interface RadioBandConfig {
  PhysicalCellID: number;
  ScellBand: string;
  ScellChannel: number;
}

export interface Ca {
  '1': RadioBandConfig;
  '2': RadioBandConfig;
}

export interface CellCAStatsCfg {
  ca: Ca;
}

export interface NetworkStatusResponse {
  connection_status: ConnectionStatus[];
  apn_cfg: ApnCfg[];
  cellular_stats: CellularStat[];
  ethernet_stats: EthernetStat[];
  cell_5G_stats_cfg: Cell5GStatsCfg[];
  cell_LTE_stats_cfg: CellLTEStatsCfg[];
  cell_CA_stats_cfg: CellCAStatsCfg[];
}
