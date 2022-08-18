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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_name',20)->nullable();
            $table->string('user_password',255)->nullable();
            $table->string('user_email',30)->nullable();
            $table->bigInteger('company_id')->nullable();
            $table->bigInteger('position_id')->nullable();
            $table->bigInteger('office_id')->nullable();
            $table->bigInteger('department_id')->nullable();
            $table->bigInteger('category_id')->nullable();
            $table->string('login_id',255)->nullable();
            $table->tinyInteger('user_edit_r')->default(0);
            $table->tinyInteger('user_refer_r')->default(0);
            $table->tinyInteger('notice_edit_r')->default(0);            
            $table->tinyInteger('notice_reply_r')->default(0);
            $table->tinyInteger('notice_refer_r')->default(0);
            $table->tinyInteger('wiki_edit_r')->default(0);
            $table->tinyInteger('wiki_refer_r')->default(0);
            $table->tinyInteger('wf_edit_r')->default(0);
            $table->tinyInteger('wf_refer_r')->default(0);
            $table->tinyInteger('sns_edit_r')->default(0);
            $table->tinyInteger('sns_refer_r')->default(0);
            $table->tinyInteger('fs_edit_r')->default(0);
            $table->tinyInteger('fs_refer_r')->default(0);
            $table->string('user_picture',255)->nullable();
            $table->text('user_selfintro')->nullable();
            $table->timestamp('user_email_verified_at')->nullable();
            $table->tinyInteger('user_deleted')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
