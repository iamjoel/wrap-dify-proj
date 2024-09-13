'use client'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const Test: FC<Props> = ({
}) => {
  const { t } = useTranslation()

  return (
    <div>
      I18n: {t('common.appMenus.promptEng')}
    </div>
  )
}
export default React.memo(Test)

