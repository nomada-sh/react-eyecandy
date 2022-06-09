import { Theme } from './types/Theme';

export const DefaultTheme: Partial<Theme> = {
  primary_color: '@blue-6',
  primary_color_hover: "color(~`colorPalette('@{primary-color}', 5) `)",
  primary_color_active: "color(~`colorPalette('@{primary-color}', 7) `)",
  primary_color_outline: 'fade(@primary-color, @outline-fade)',
  processing_color: '@blue-6',
  info_color: '@primary-color',
  info_color_deprecated_bg: "color(~`colorPalette('@{info-color}', 1) `)",
  info_color_deprecated_border: "color(~`colorPalette('@{info-color}', 3) `)",
  success_color: '@green-6',
  success_color_hover: "color(~`colorPalette('@{success-color}', 5) `)",
  success_color_active: "color(~`colorPalette('@{success-color}', 7) `)",
  success_color_outline: 'fade(@success-color, @outline-fade)',
  success_color_deprecated_bg: "color(~`colorPalette('@{success-color}', 1) `)",
  success_color_deprecated_border:
    "color(~`colorPalette('@{success-color}', 3) `)",
  warning_color: '@gold-6',
  warning_color_hover: "color(~`colorPalette('@{warning-color}', 5) `)",
  warning_color_active: "color(~`colorPalette('@{warning-color}', 7) `)",
  warning_color_outline: 'fade(@warning-color, @outline-fade)',
  warning_color_deprecated_bg: "color(~`colorPalette('@{warning-color}', 1) `)",
  warning_color_deprecated_border:
    "color(~`colorPalette('@{warning-color}', 3) `)",
  error_color: '@red-5',
  error_color_hover: "color(~`colorPalette('@{error-color}', 5) `)",
  error_color_active: "color(~`colorPalette('@{error-color}', 7) `)",
  error_color_outline: 'fade(@error-color, @outline-fade)',
  error_color_deprecated_bg: "color(~`colorPalette('@{error-color}', 1) `)",
  error_color_deprecated_border: "color(~`colorPalette('@{error-color}', 3) `)",
  highlight_color: '@red-5',
  normal_color: '#d9d9d9',
  primary_1: "color(~`colorPalette('@{primary-color}', 1) `)",
  primary_2: "color(~`colorPalette('@{primary-color}', 2) `)",
  primary_3: "color(~`colorPalette('@{primary-color}', 3) `)",
  primary_4: "color(~`colorPalette('@{primary-color}', 4) `)",
  primary_5: "color(  ~`colorPalette('@{primary-color}', 5) `)",
  primary_6: '@primary-color',
  primary_7: "color(~`colorPalette('@{primary-color}', 7) `)",
  primary_8: "color(~`colorPalette('@{primary-color}', 8) `)",
  primary_9: "color(~`colorPalette('@{primary-color}', 9) `)",
  primary_10: "color(~`colorPalette('@{primary-color}', 10) `)",
  body_background: '#fff',
  component_background: '#fff',
  popover_background: '@component-background',
  popover_customize_border_color: '@border-color-split',
  text_color: 'fade(@black, 85%)',
  text_color_secondary: 'fade(@black, 45%)',
  text_color_inverse: '@white',
  icon_color: 'inherit',
  icon_color_hover: 'fade(@black, 75%)',
  heading_color: 'fade(@black, 85%)',
  text_color_dark: 'fade(@white, 85%)',
  text_color_secondary_dark: 'fade(@white, 65%)',
  text_selection_bg: '@primary-color',
  item_active_bg: '@primary-1',
  item_hover_bg: '#f5f5f5',
  link_color: '@primary-color',
  link_hover_color: "color(~`colorPalette('@{link-color}', 5) `)",
  link_active_color: "color(~`colorPalette('@{link-color}', 7) `)",
  border_color_base: 'hsv(0, 0, 85%)',
  border_color_split: 'hsv(0, 0, 94%)',
  border_color_inverse: '@white',
  outline_color: '@primary-color',
  background_color_light: 'hsv(0, 0, 98%)',
  background_color_base: 'hsv(0, 0, 96%)',
  disabled_color: 'fade(#000, 25%)',
  disabled_bg: '@background-color-base',
  disabled_active_bg: 'tint(@black, 90%)',
  disabled_color_dark: 'fade(#fff, 35%)',
  shadow_color: 'rgba(0, 0, 0, 0.15)',
  shadow_color_inverse: '@component-background',
  box_shadow_base: '@shadow-2',
  shadow_1_up:
    '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),  0 -12px 48px 16px rgba(0, 0, 0, 0.03)',
  shadow_1_down:
    '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),  0 12px 48px 16px rgba(0, 0, 0, 0.03)',
  shadow_1_left:
    '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),  -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
  shadow_1_right:
    '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),  12px 0 48px 16px rgba(0, 0, 0, 0.03)',
  shadow_2:
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),  0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  btn_shadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
  btn_primary_shadow: '0 2px 0 rgba(0, 0, 0, 0.045)',
  btn_text_shadow: '0 -1px 0 rgba(0, 0, 0, 0.12)',
  btn_primary_color: '#fff',
  btn_primary_bg: '@primary-color',
  btn_default_color: '@text-color',
  btn_default_bg: '@component-background',
  btn_default_border: '@border-color-base',
  btn_danger_color: '#fff',
  btn_danger_bg: '@error-color',
  btn_danger_border: '@error-color',
  btn_disable_color: '@disabled-color',
  btn_disable_bg: '@disabled-bg',
  btn_disable_border: '@border-color-base',
  btn_default_ghost_color: '@component-background',
  btn_default_ghost_bg: 'transparent',
  btn_default_ghost_border: '@component-background',
  btn_group_border: '@primary-5',
  btn_link_hover_bg: 'transparent',
  btn_text_hover_bg: 'rgba(0, 0, 0, 0.018)',
  checkbox_color: '@primary-color',
  checkbox_check_color: '#fff',
  checkbox_check_bg: '@checkbox-check-color',
  descriptions_bg: '#fafafa',
  descriptions_extra_color: '@text-color',
  divider_color: 'rgba(0, 0, 0, 6%)',
  dropdown_selected_color: '@primary-color',
  dropdown_menu_submenu_disabled_bg: '@component-background',
  dropdown_selected_bg: '@item-active-bg',
  radio_dot_color: '@primary-color',
  radio_dot_disabled_color: 'fade(@black, 20%)',
  radio_solid_checked_color: '@component-background',
  radio_button_bg: '@btn-default-bg',
  radio_button_checked_bg: '@btn-default-bg',
  radio_button_color: '@btn-default-color',
  radio_button_hover_color: '@primary-5',
  radio_button_active_color: '@primary-7',
  radio_disabled_button_checked_bg: '@disabled-active-bg',
  radio_disabled_button_checked_color: '@disabled-color',
  layout_body_background: '#f0f2f5',
  layout_header_background: '#001529',
  layout_header_color: '@text-color',
  layout_footer_background: '@layout-body-background',
  layout_sider_background: '@layout-header-background',
  layout_trigger_background: '#002140',
  layout_trigger_color: '#fff',
  layout_sider_background_light: '#fff',
  layout_trigger_background_light: '#fff',
  layout_trigger_color_light: '@text-color',
  dropdown_menu_bg: '@component-background',
  label_required_color: '@highlight-color',
  label_color: '@heading-color',
  form_warning_input_bg: '@input-bg',
  form_error_input_bg: '@input-bg',
  input_placeholder_color: 'hsv(0, 0, 75%)',
  input_color: '@text-color',
  input_icon_color: '@input-color',
  input_border_color: '@border-color-base',
  input_bg: '@component-background',
  input_number_hover_border_color: '@input-hover-border-color',
  input_number_handler_active_bg: '#f4f4f4',
  input_number_handler_hover_bg: '@primary-5',
  input_number_handler_bg: '@component-background',
  input_number_handler_border_color: '@border-color-base',
  input_addon_bg: '@background-color-light',
  input_hover_border_color: '@primary-5',
  input_disabled_bg: '@disabled-bg',
  input_icon_hover_color: 'fade(@black, 85%)',
  input_disabled_color: '@disabled-color',
  mentions_dropdown_bg: '@component-background',
  mentions_dropdown_menu_item_hover_bg: '@mentions-dropdown-bg',
  select_border_color: '@border-color-base',
  select_item_selected_color: '@text-color',
  select_dropdown_bg: '@component-background',
  select_item_selected_bg: '@primary-1',
  select_item_active_bg: '@item-hover-bg',
  select_background: '@component-background',
  select_clear_background: '@select-background',
  select_selection_item_bg: '@background-color-base',
  select_selection_item_border_color: '@border-color-split',
  select_multiple_disabled_background: '@input-disabled-bg',
  select_multiple_item_disabled_color: '#bfbfbf',
  select_multiple_item_disabled_border_color: '@select-border-color',
  cascader_bg: '@component-background',
  cascader_item_selected_bg: '@primary-1',
  cascader_menu_bg: '@component-background',
  cascader_menu_border_color_split: '@border-color-split',
  anchor_bg: 'transparent',
  anchor_border_color: '@border-color-split',
  tooltip_color: '#fff',
  tooltip_bg: 'rgba(0, 0, 0, 0.75)',
  tooltip_arrow_color: '@tooltip-bg',
  popover_bg: '@component-background',
  popover_color: '@text-color',
  popover_arrow_color: '@popover-bg',
  popover_arrow_outer_color: '@popover-bg',
  modal_header_bg: '@component-background',
  modal_header_border_color_split: '@border-color-split',
  modal_content_bg: '@component-background',
  modal_heading_color: '@heading-color',
  modal_close_color: '@text-color-secondary',
  modal_footer_bg: 'transparent',
  modal_footer_border_color_split: '@border-color-split',
  modal_mask_bg: 'fade(@black, 45%)',
  progress_default_color: '@processing-color',
  progress_remaining_color: '@background-color-base',
  progress_info_text_color: '@progress-text-color',
  progress_steps_item_bg: '#f3f3f3',
  progress_text_color: '@text-color',
  menu_bg: '@component-background',
  menu_popup_bg: '@component-background',
  menu_item_color: '@text-color',
  menu_inline_submenu_bg: '@background-color-light',
  menu_highlight_color: '@primary-color',
  menu_highlight_danger_color: '@error-color',
  menu_item_active_bg: '@primary-1',
  menu_item_active_danger_bg: '@red-1',
  menu_item_group_title_color: '@text-color-secondary',
  menu_dark_color: '@text-color-secondary-dark',
  menu_dark_danger_color: '@error-color',
  menu_dark_bg: '@layout-header-background',
  menu_dark_arrow_color: '#fff',
  menu_dark_inline_submenu_bg: '#000c17',
  menu_dark_highlight_color: '#fff',
  menu_dark_item_active_bg: '@primary-color',
  menu_dark_item_active_danger_bg: '@error-color',
  menu_dark_selected_item_icon_color: '@white',
  menu_dark_selected_item_text_color: '@white',
  menu_dark_item_hover_bg: 'transparent',
  table_bg: '@component-background',
  table_header_bg: '@background-color-light',
  table_header_color: '@heading-color',
  table_header_sort_bg: '@background-color-base',
  table_body_sort_bg: '#fafafa',
  table_row_hover_bg: '@background-color-light',
  table_selected_row_color: 'inherit',
  table_selected_row_bg: '@primary-1',
  table_body_selected_sort_bg: '@table-selected-row-bg',
  table_selected_row_hover_bg: 'darken(@table-selected-row-bg, 2%)',
  table_expanded_row_bg: '#fbfbfb',
  table_border_color: '@border-color-split',
  table_footer_bg: '@background-color-light',
  table_footer_color: '@heading-color',
  table_header_cell_split_color: 'rgba(0, 0, 0, 0.06)',
  table_header_sort_active_bg: 'rgba(0, 0, 0, 0.04)',
  table_fixed_header_sort_active_bg: 'hsv(0, 0, 96%)',
  table_header_filter_active_bg: 'rgba(0, 0, 0, 0.04)',
  table_filter_btns_bg: 'inherit',
  table_filter_dropdown_bg: '@component-background',
  table_expand_icon_bg: '@component-background',
  table_sticky_scroll_bar_bg: 'fade(#000, 35%)',
  tag_default_bg: '@background-color-light',
  tag_default_color: '@text-color',
  picker_bg: '@component-background',
  picker_basic_cell_hover_color: '@item-hover-bg',
  picker_basic_cell_active_with_range_color: '@primary-1',
  picker_basic_cell_hover_with_range_color: 'lighten(@primary-color, 35%)',
  picker_basic_cell_disabled_bg: 'rgba(0, 0, 0, 0.04)',
  picker_border_color: '@border-color-split',
  picker_date_hover_range_border_color: 'lighten(@primary-color, 20%)',
  picker_date_hover_range_color: '@picker-basic-cell-hover-with-range-color',
  calendar_bg: '@component-background',
  calendar_input_bg: '@input-bg',
  calendar_border_color: '@border-color-inverse',
  calendar_item_active_bg: '@item-active-bg',
  calendar_column_active_bg: 'fade(@calendar-item-active-bg, 20%)',
  calendar_full_bg: '@calendar-bg',
  calendar_full_panel_bg: '@calendar-full-bg',
  badge_text_color: '@component-background',
  badge_color: '@highlight-color',
  rate_star_color: '@yellow-6',
  rate_star_bg: '@border-color-split',
  card_head_color: '@heading-color',
  card_head_background: 'transparent',
  card_actions_background: '@component-background',
  card_skeleton_bg: '#cfd8dc',
  card_background: '@component-background',
  card_shadow:
    '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),  0 5px 12px 4px rgba(0, 0, 0, 0.09)',
  card_head_extra_color: '@text-color',
  comment_bg: 'inherit',
  comment_author_name_color: '@text-color-secondary',
  comment_author_time_color: '#ccc',
  comment_action_color: '@text-color-secondary',
  comment_action_hover_color: '#595959',
  tabs_card_head_background: '@background-color-light',
  tabs_card_active_color: '@primary-color',
  tabs_ink_bar_color: '@primary-color',
  tabs_highlight_color: '@primary-color',
  tabs_hover_color: '@primary-5',
  tabs_active_color: '@primary-7',
  back_top_color: '#fff',
  back_top_bg: '@text-color-secondary',
  back_top_hover_bg: '@text-color',
  avatar_bg: '#ccc',
  avatar_color: '#fff',
  avatar_group_border_color: '#fff',
  switch_color: '@primary-color',
  switch_bg: '@component-background',
  switch_shadow_color: 'fade(#00230b, 20%)',
  pagination_item_bg: '@component-background',
  pagination_item_link_bg: '@component-background',
  pagination_item_disabled_color_active: '@disabled-color',
  pagination_item_input_bg: '@component-background',
  page_header_back_color: '#000',
  page_header_ghost_bg: 'inherit',
  breadcrumb_base_color: '@text-color-secondary',
  breadcrumb_last_item_color: '@text-color',
  breadcrumb_link_color: '@text-color-secondary',
  breadcrumb_link_color_hover: '@text-color',
  breadcrumb_separator_color: '@text-color-secondary',
  slider_rail_background_color: '@background-color-base',
  slider_rail_background_color_hover: '#e1e1e1',
  slider_track_background_color: '@primary-3',
  slider_track_background_color_hover: '@primary-4',
  slider_handle_background_color: '@component-background',
  slider_handle_color: '@primary-3',
  slider_handle_color_hover: '@primary-4',
  slider_handle_color_focus: 'tint(@primary-color, 20%)',
  slider_handle_color_focus_shadow: 'fade(@primary-color, 12%)',
  slider_handle_color_tooltip_open: '@primary-color',
  slider_handle_shadow: '0',
  slider_dot_border_color: '@border-color-split',
  slider_dot_border_color_active: 'tint(@primary-color, 50%)',
  slider_disabled_color: '@disabled-color',
  slider_disabled_background_color: '@component-background',
  tree_bg: '@component-background',
  tree_directory_selected_color: '#fff',
  tree_directory_selected_bg: '@primary-color',
  tree_node_hover_bg: '@item-hover-bg',
  tree_node_selected_bg: '@primary-2',
  collapse_header_bg: '@background-color-light',
  collapse_content_bg: '@component-background',
  skeleton_color: 'rgba(190, 190, 190, 0.2)',
  skeleton_to_color: 'shade(@skeleton-color, 5%)',
  transfer_disabled_bg: '@disabled-bg',
  transfer_item_hover_bg: '@item-hover-bg',
  transfer_item_selected_hover_bg: 'darken(@item-active-bg, 2%)',
  message_notice_content_bg: '@component-background',
  alert_success_border_color: "~`colorPalette('@{success-color}', 3) `",
  alert_success_bg_color: "~`colorPalette('@{success-color}', 1) `",
  alert_success_icon_color: '@success-color',
  alert_info_border_color: "~`colorPalette('@{info-color}', 3) `",
  alert_info_bg_color: "~`colorPalette('@{info-color}', 1) `",
  alert_info_icon_color: '@info-color',
  alert_warning_border_color: "~`colorPalette('@{warning-color}', 3) `",
  alert_warning_bg_color: "~`colorPalette('@{warning-color}', 1) `",
  alert_warning_icon_color: '@warning-color',
  alert_error_border_color: "~`colorPalette('@{error-color}', 3) `",
  alert_error_bg_color: "~`colorPalette('@{error-color}', 1) `",
  alert_error_icon_color: '@error-color',
  alert_message_color: '@heading-color',
  alert_text_color: '@text-color',
  alert_close_color: '@text-color-secondary',
  alert_close_hover_color: '@icon-color-hover',
  list_header_background: 'transparent',
  list_footer_background: 'transparent',
  list_customize_card_bg: '@component-background',
  drawer_bg: '@component-background',
  timeline_color: '@border-color-split',
  timeline_dot_color: '@primary-color',
  timeline_dot_bg: '@component-background',
  upload_actions_color: '@text-color-secondary',
  process_tail_color: '@border-color-split',
  steps_nav_arrow_color: 'fade(@black, 25%)',
  steps_background: '@component-background',
  notification_bg: '@component-background',
  image_bg: '#f5f5f5',
  image_color: '#fff',
  image_preview_operation_color: '@text-color-dark',
  image_preview_operation_disabled_color:
    'fade(@image-preview-operation-color, 25%)',
  segmented_bg: 'fade(@black, 4%)',
  segmented_hover_bg: 'fade(@black, 6%)',
  segmented_selected_bg: '@white',
  segmented_label_color: 'fade(@black, 65%)',
  segmented_label_hover_color: '#262626',
};
