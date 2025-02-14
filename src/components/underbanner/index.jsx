import { Headset, MessageSquare, PhoneCall } from 'lucide-react'
import { Container } from './styles'

export const Underbanner = () => (
	<Container>
		<div className="bannerCard">
			<PhoneCall className="icon" />
			<p className="text">Ligações e SMS ilimitados para qualquer operadora</p>
		</div>
		<div className="bannerCard center">
			<MessageSquare className="icon" />
			<p className="text">
				WhatsApp ilimitado para mensagens, áudios, fotos e vídeos
			</p>
		</div>
		<div className="bannerCard">
			<Headset className="icon" />
			<p className="text">Suporte humanizado para maior agilidade</p>
		</div>
	</Container>
)
