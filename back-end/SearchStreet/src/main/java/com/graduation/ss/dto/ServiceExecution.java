package com.graduation.ss.dto;

import java.util.List;

import com.graduation.ss.entity.ServiceImg;
import com.graduation.ss.entity.ServiceInfo;
import com.graduation.ss.enums.ServiceStateEnum;

public class ServiceExecution {
	// 结果状态
	private int state;

	// 状态标识
	private String stateInfo;

	// 服务数量
	private int count;

	// 操作的serviceInfo(增删改服务的时候用到)
	private ServiceInfo serviceInfo;
	// 操作的serviceImg(删改服务图片的时候用到)
	private ServiceImg serviceImg;
	// 服务列表(查询服务列表的时候使用)
	private List<ServiceInfo> serviceInfoList;

	public ServiceExecution() {

	}

	// 服务操作失败的时候使用的构造器
	public ServiceExecution(ServiceStateEnum stateEnum) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
	}

	// 增删改服务操作成功的时候使用的构造器
	public ServiceExecution(ServiceStateEnum stateEnum, ServiceInfo serviceInfo) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
		this.serviceInfo = serviceInfo;
	}
	// 删改服务图片操作成功的时候使用的构造器
	public ServiceExecution(ServiceStateEnum stateEnum, ServiceImg serviceImg) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
		this.serviceImg = serviceImg;
	}

	// 查询服务操作成功的时候使用的构造器
	public ServiceExecution(ServiceStateEnum stateEnum, List<ServiceInfo> serviceInfoList) {
		this.state = stateEnum.getState();
		this.stateInfo = stateEnum.getStateInfo();
		this.serviceInfoList = serviceInfoList;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getStateInfo() {
		return stateInfo;
	}

	public void setStateInfo(String stateInfo) {
		this.stateInfo = stateInfo;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public ServiceInfo getService() {
		return serviceInfo;
	}

	public void setService(ServiceInfo serviceInfo) {
		this.serviceInfo = serviceInfo;
	}

	public List<ServiceInfo> getServiceList() {
		return serviceInfoList;
	}

	public void setServiceList(List<ServiceInfo> serviceInfoList) {
		this.serviceInfoList = serviceInfoList;
	}
}
