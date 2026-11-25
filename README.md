<img src="assets/aqr-icon.png" width="96" height="96" alt="AQR">

# 自动扫码助手 · Auto QR Assistant（AQR）

在电脑上操作手机 App，登录电脑客户端或网页时，由手机 App 自动扫码。

[中文](#中文) · [English](#english)

## 中文

### 下载

首版发布包正在准备中。发布后，可在本仓库的 **Releases** 下载 Windows x64 版本。

AQR 当前版本的 Windows 安装版（EXE）和本机 MCP 版均可免费下载和使用。后续版本及新增功能的定价，以对应的发布说明为准。

| 版本 | 适用场景 |
| --- | --- |
| Windows 安装版（EXE） | 打开 AQR 主界面，手动选择手机应用和二维码画面。 |
| 本机 MCP 版 | 在 Codex 等支持本机 MCP 的客户端里，用聊天打开手机应用、执行已配置的登录流程和查看进度。 |

### 使用

1. 在安卓手机上开启开发者选项和 USB 调试，用数据线连接 Windows 电脑，并在手机上允许这台电脑调试。
2. 桌面版从 Windows 开始菜单打开。在 AQR 里刷新设备，选一个手机 App，即可在独立窗口用鼠标和键盘操作。
3. 扫码登录时，使用「电脑模式」选取窗口截图或粘贴二维码，再进入手机 App 的「扫一扫」。截图和粘贴图片无需 OBS。
4. 使用 MCP 版时，按发布包附带的说明连接客户端。连接后可以说「打开自动扫码助手主界面」或「用 AQR 自动登录交管 12123 单位用户入口」。已验证的登录步骤和执行进度可在本机查询。

**兼容性**　普通手机 App 窗口需要可用的 USB 调试连接。电脑模式还需要 Android 16 或更高版本，以及手机上已有的系统应用串流关联。交管 12123 单位用户扫码登录已在小米 14 Pro 上验证。AQR 桌面界面可在简体中文和英文之间切换。

## English

Use Android apps on your PC. When you sign in to a desktop app or website, AQR sends the QR image to the Android app so it can scan the code.

### Downloads

The initial release packages are in preparation. Windows x64 downloads will appear under **Releases**.

The current version of AQR is free to download and use, including the Windows installer (EXE) and the local MCP edition. Pricing for future versions and new features will be stated in the corresponding release notes.

| Edition | When to use it |
| --- | --- |
| Windows installer (EXE) | Use the AQR desktop interface to choose an Android app and a QR image. |
| Local MCP | Use a local MCP client such as Codex to open Android apps, run configured sign-in workflows, and check their progress from chat. |

### Getting started

1. Enable Developer options and USB debugging on your Android phone. Connect it to your Windows PC with a data cable and authorize the PC on the phone.
2. Open the desktop edition from the Windows Start menu. Refresh devices in AQR and select an Android app to use it in a separate window with your mouse and keyboard.
3. For QR sign-in, use PC Mode to capture a window or paste a QR image, then open the Android app's scanner. Screenshots and pasted images work without OBS.
4. For the MCP edition, follow the setup instructions included with the release. Once connected, try “Open the Auto QR Assistant main window” or “Use AQR to sign in to the 12123 organization portal.” Verified sign-in steps and run progress can be reviewed locally.

**Compatibility**　Standard app windows require a working USB debugging connection. PC Mode also requires Android 16 or later and an existing system app streaming association. Organization QR sign-in for 12123 has been verified on a Xiaomi 14 Pro. The AQR desktop interface supports Simplified Chinese and English.
