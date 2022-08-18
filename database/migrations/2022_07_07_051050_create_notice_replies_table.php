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
        Schema::create('notice_replies', function (Blueprint $table) {
            $table->id();
            $table->integer('notice_id');
            $table->integer('user_id');
            $table->tinyInteger('reply_status');
            $table->string('reply_link_ok',30);
            $table->string('reply_link_ng',30);
            $table->text('reply_content');
            $table->timestamp('reply_created_at');
            $table->integer('reply_approved_user_id');
            $table->tinyInteger('reply_deleted');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notice_replies');
    }
};
