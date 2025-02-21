import BannerImage from '@assets/Banner.svg'
import BannerMobile from '@assets/banner-mobile.jpg'
import { Container } from './styles'

export const Banner = () => (
	<Container
		$backgroundImage={BannerImage}
		$backgroundImageMobile={BannerMobile}
	/>
)
