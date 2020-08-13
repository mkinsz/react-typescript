# WebRTC

**WebRTC**  (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点 (Peer-to-Peer)的连接，实现视频流和 (或)音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点 (Peer-to-Peer)的数据分享和电话会议成为可能。

它并不是单一的协议，包含了媒体、加密、传输层等在内的多个协议标准以及一套基于 JavaScript 的 API。通过简单易用的 JavaScript API ，在不安装任何插件的情况下，让浏览器拥有了 P2P 音视频和数据分享的能力。同时 WebRTC 并不是一个孤立的协议，它拥有灵活的信令，可以便捷的对接现有的 SIP 和电话网络的系统。

WebRTC 有三个模块：

- Voice Engine (音频引擎)
  - Voice Engine 包含 iSAC/iLBC Codec (音频编解码器，前者是针对宽带和超宽带，后者是针对窄带)
  - NetEQ for voice (处理网络抖动和语音包丢失)
  - Echo Canceler (回声消除器)/ Noise Reduction (噪声抑制)
- Video Engine (视频引擎)
  - VP8 Codec (视频图像编解码器)
  - Video jitter buffer (视频抖动缓冲器，处理视频抖动和视频信息包丢失)
  - Image enhancements (图像质量增强)
- Transport
  - SRTP (安全的实时传输协议，用以音视频流传输)
  - Multiplexing (多路复用)
  - P2P，STUN+TURN+ICE (用于 NAT 网络和防火墙穿越的)
  - 除此之外，安全传输可能还会用到 DTLS (数据报安全传输)，用于加密传输和密钥协商
  - 整个 WebRTC 通信是基于 UDP 的
