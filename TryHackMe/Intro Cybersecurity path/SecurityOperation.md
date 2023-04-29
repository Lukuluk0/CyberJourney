# **Security Operation**

---

## **Introduction**

A Security Operations Center (SOC) is a team of IT security professionals tasked with monitoring a company’s network and systems 24 hours a day, seven days a week.

| Task | Description              |
|:--------------|:------------------:|
|Find vulnerabilities on the network|A vulnerability is a weakness that an attacker can exploit to carry out things beyond their permission level|
|Detect unauthorized activity|It is crucial to detect this kind of unauthorized activity quickly before it causes any damage. Many clues can help us detect this, such as geographic location.|
|Discover policy violations| A security policy is a set of rules and procedures created to help protect a company against security threats and ensure compliance.|
|Detect intrusions|Intrusions refer to system and network intrusions.|
|Support with the incident response|An incident can be an observation, a policy violation, an intrusion attempt, or something more damaging such as a major breach. |

---

## **Elements of Security Operations**

### **Data Sources**

The SOC uses many data sources to monitor the network for signs of intrusions and to detect any malicious behaviour. Some of these sources are:

| Source | Description              |
|:--------------|:------------------:|
|Server logs|Logs contain information about various activities, such as successful and failed login attempts, among many others. |
|DNS activity|The SOC can gather information about domain names that internal systems are trying to communicate with by merely inspecting DNS queries.|
|Firewall logs| Firewall logs can reveal much information about what packets passed or tried to pass through the firewall.|
|DHCP logs| By inspecting DHCP transactions, we can learn about the devices that joined the network.|

A SOC might use a Security Information and Event Management (SIEM) system. The SIEM aggregates the data from the different sources so that the SOC can efficiently correlate the data and respond to attacks.

### **SOC Services**

SOC services include reactive and proactive
services in addition to other services.

Reactive services refer to the tasks initiated after detecting an intrusion or a malicious event:

<div style="text-align:center"><h2><strong>Reactive</strong></h2></div>

| Task | Description              |
|:--------------|:------------------:|
|Monitor security posture|Monitoring the network and computers for security alerts and notifications and responding to them as the need dictates.|
|Vulnerability management|This refers to finding vulnerabilities in the company systems and patching (fixing) them|
|Malware analysis|The SOC can do basic analysis by executing it in a controlled environment. However, more advanced analysis requires sending it to a dedicated team.|
|Intrusion detection| ***Intrusion detection system*** (IDS) is used to detect and log intrusions and suspicious packets. Maintain such a system, monitor its alerts, and go through its logs as the need dictates.|
|Reporting|It is essential to report incidents and alarms.|

Proactive services refer to the tasks handled by the SOC without any indicator of an intrusion.

<div style="text-align:center"><h2><strong>Proactive</strong></h2></div>

| Task | Description              |
|:--------------|:------------------:|
|Network security monitoring (NSM)|This focuses on monitoring the network data and analyzing the traffic to detect signs of intrusions.|
|Threat hunting|The SOC assumes an intrusion has already taken place and begins its hunt to see if they can confirm this assumption.|
|Threat Intelligence|Threat intelligence focuses on learning about potential adversaries and their tactics and techniques to improve the company’s defences.|
