
//import {SparklesPreview} from '../components/sparkles-comp'
import {SpotlightPreview} from '../components/hero-comp'
import {BentoGridDemo} from '../components/bento-comp'
import {AnimatedTooltipPreview} from '../components/tooltip-comp'
import {BackgroundGradientDemo} from '../components/bg-gradient-comp'
import {SparklesPreviewFooter} from '../components/footer'
export default function Home() {
  return (
    <>
      <SpotlightPreview/>
      <BentoGridDemo/>
      <AnimatedTooltipPreview/>
      <BackgroundGradientDemo/>
      <SparklesPreviewFooter/>
    </>
  );
}
