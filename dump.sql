PGDMP  7    /        	        |            shop    12.18    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    shop    DATABASE     o   CREATE DATABASE shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE shop;
             	   developer    false            �          0    16421    product 
   TABLE DATA           0   COPY public.product (id, name, plu) FROM stdin;
    public       	   developer    false    206   ^       �          0    16406    shop 
   TABLE DATA           (   COPY public.shop (id, name) FROM stdin;
    public       	   developer    false    204   �       �          0    16415 	   remainder 
   TABLE DATA           d   COPY public.remainder (id, "quantityOnShelf", "quantityInOrder", "productId", "shopId") FROM stdin;
    public       	   developer    false    205   U       �          0    16396    action 
   TABLE DATA           O   COPY public.action (id, changes, type, "createdAt", "remainderId") FROM stdin;
    public       	   developer    false    203   �       �   ^   x�˱�0 �Z�B.dP�9�@@�������!#9m���Lt�
R�Eʔ�v>�]W�N��A�&n�}���X5ą�ƚ��ʳ�mQ�� ^�      �   y   x��;�0 й��Q>vl� !$V;q�n�ǧxou���t`��mBh�Y�њl��*���	pe�� �Ѩ�b����{���f4[��ؽ���[�R�Z��xޮ�sI)�M�"_      �   _   x�ʻ! �X{a����P迄ۉ)��)�E	r8!n9�u�'<��f��C� �n�!K%������R�K��v��.V\����9�-��      �   �   x��нj�0�9y���
���#o�醮],[�%pi:��w�;��(4���Obclp)C��Ǩ�\#�,.'����e\�m������I@<���ǧa�}�u��_��e+��Qs�^֗7}�-EstyӴkg�e0�Հ�-���3[��H���;LQ� �Ja����;ett������!��$�3�9 �&`j���.S��j�\���GW�?��:GޝC�N}�� K     