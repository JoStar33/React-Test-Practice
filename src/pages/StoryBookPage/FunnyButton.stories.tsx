import { ComponentStory, ComponentMeta } from '@storybook/react';
import FunnyButton from './FunnyButton';
import { propsType } from './FunnyButton';

export default {
  title: '버튼의 다양한 형태 테스트',
  component: FunnyButton,
} as ComponentMeta<typeof FunnyButton>;

const Template: ComponentStory<typeof FunnyButton> = (args) => <FunnyButton {...args} />;

export const WidthTest = Template.bind({});
WidthTest.args = {
  width: 100,
  height: 3,
  name: "가로가 긴 버튼",
  color: "blue"
};

export const HeightTest = Template.bind({});
HeightTest.args = {
  width: 3,
  height: 100,
  name: "세로가 긴 버튼",
  color: "yellow"
}