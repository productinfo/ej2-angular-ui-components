# Changelog

## [Unreleased]

## 16.4.52 (2019-02-05)

### TreeGrid

#### Breaking Changes

- Default value of `editSettings.mode` has been changed to `Cell`.

#### Bug Fixes

- Expanding and Collapsing records is working fine when `pageSizeMode` is set as `All`.
- `expandAtLevel`, `collapseAtLevel`, `expandAll` and `collapseAll` methods are working fine when `pageSizeMode` is set as `All`.
- Added events for the column menu feature and added `columnMenuItems` API to modify the column menu items in column menu.
- Added `sortComparer` API to perform custom sorting in TreeGrid.
- Property change support for `height` property has been provided.
- Expand icon is prevented from displaying for the root/zeroth level record which has `hasChildMapping` field as false.
- Child records of third level or its successor displays properly based on their hierarchy relation in self reference data binding.
- `Query` maintenance support provided for `refresh` method after expanding any child rows.

- `actionBegin`, `actionComplete` and `actionFailure` events are triggered properly.
- Additional parameters that are added using the `query` property of TreeGrid are passed to the server side when a parent record is expanded.
- Expand icon is prevented from displaying for the root/zeroth level record which has `hasChildMapping` field as false.

## 16.4.48 (2019-01-22)

### TreeGrid

#### Bug Fixes

- `Query` maintenance support provided for `refresh` method after expanding any child rows.

## 16.4.46 (2019-01-08)

### TreeGrid

#### Bug Fixes

- Property change support for `height` property has been provided.
- Expand icon is prevented from displaying for the root/zeroth level record which has `hasChildMapping` field as false.
- Child records of third level or its successor displays properly based on their hierarchy relation in self reference data binding.

- Expand icon is prevented from displaying for the root/zeroth level record which has `hasChildMapping` field as false.

## 16.4.45 (2019-01-02)

### TreeGrid

#### Bug Fixes

- Added events for the column menu feature and added `columnMenuItems` API to modify the column menu items in column menu.
- Added `sortComparer` API to perform custom sorting in TreeGrid.

## 16.4.44 (2018-12-24)

### TreeGrid

#### Bug Fixes

- Expanding and Collapsing records is working fine when `pageSizeMode` is set as `All`.
- `expandAtLevel`, `collapseAtLevel`, `expandAll` and `collapseAll` methods are working fine when `pageSizeMode` is set as `All`.


- `actionBegin`, `actionComplete` and `actionFailure` events are triggered properly.
- Additional parameters that are added using the `query` property of TreeGrid are passed to the server side when a parent record is expanded.


