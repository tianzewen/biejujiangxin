<?php

namespace app\models;

use yii\db\ActiveRecord;

class UserBasicInfo extends ActiveRecord
{
	public static function tableName()
    {
        return 'user-basicinfo';
    }
}