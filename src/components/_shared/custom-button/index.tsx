import React, { ReactElement } from 'react';
import { StyledCustomButton } from './index.styled';
import {motion} from 'framer-motion'

type CustomBtnProps = {
  category: 'primary' | 'ghost' | 'default';
  children: string | number | ReactElement;
  className?: string;
  htmlType?: 'submit';
  onClick?: any;
  loading?: boolean;
  block?: boolean;
  padding?: string;
  isMobile?: boolean;
  disabled?: boolean;
  height?: string | number;
  style?: React.CSSProperties;
  backgroundColor?: string;
  shape?: 'default' | 'circle' | 'round' | undefined;
  border?: string;
};

const CustomButton = (props: CustomBtnProps) => {
  const {
    category = 'ghost',
    children,
    className,
    htmlType,
    onClick,
    loading,
    block,
    style,
    padding = '0 60px',
    isMobile = false,
    height = 60,
    disabled = false,
    backgroundColor,
    shape,
    border = 'none',
  } = props;

  return (
    <motion.div whileTap={{ scale: 0.9 }} style={{ display: block ? '' : 'inline-block' }}>
      <StyledCustomButton
        style={{
          ...style,
          height: isMobile ? 28 : height,
          padding: isMobile ? '0 16px' : padding,
          border: border,
          lineHeight: 0,
          background: category === 'ghost' ? 'transparent' : backgroundColor || 'var(--accent)',
        }}
        className={className}
        category={category}
        type={htmlType}
        onClick={onClick}
        loading={loading}
        shape={shape}
        disabled={disabled}
      >
        <span
          data-testid={'dti_span_children'}
        >
          {children}
        </span>
      </StyledCustomButton>
    </motion.div>
  );
};
export default CustomButton;
