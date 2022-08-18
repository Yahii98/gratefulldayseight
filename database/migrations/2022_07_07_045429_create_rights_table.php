<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rights', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('company_id');
            $table->tinyInteger('post_id');
            $table->tinyInteger('office_id');
            $table->tinyInteger('dept_id');
            $table->tinyInteger('user_edit_r');
            $table->tinyInteger('user_refer_r');
            $table->tinyInteger('notice_edit_r');            
            $table->tinyInteger('notice_reply_r');
            $table->tinyInteger('notice_refer_r');
            $table->tinyInteger('wiki_edit_r');
            $table->tinyInteger('wiki_refer_r');
            $table->tinyInteger('wf_edit_r');
            $table->tinyInteger('wf_refer_r');
            $table->tinyInteger('sns_edit_r');
            $table->tinyInteger('sns_refer_r');
            $table->tinyInteger('fs_edit_r');
            $table->tinyInteger('fs_refer_r');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rights');
    }
};
